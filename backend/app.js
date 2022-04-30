const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

const { ValidationError } = require("sequelize");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//security
if (!isProduction) {
  // cors is for dev only for the different server for react and express servers
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
//allows images with URLs to render in deployment
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

/* 
The csurf middleware will add a _csrf cookie that is HTTP-only
(can't be read by JavaScript) to any server response.
It also adds a method on all requests (req.csrfToken)
that will be set to another cookie (XSRF-TOKEN) later on.
These two cookies work together to provide CSRF
(Cross-Site Request Forgery) protection for your application.
The XSRF-TOKEN cookie value needs to be sent in the header of
any request with all HTTP verbs besides GET.
This header will be used to validate the _csrf cookie
to confirm that the request comes from your site and
not an unauthorized site.
*/

//connect all the routes
app.use(routes);

//error handling middleware

//resource not found error-handler
//catch unhandled requests and forward to error handler

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

//for catching sequelize errors and formatting them before sending the error response
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

//error formatter

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
