# NatureClikr

NatureClikr is a website for users to upload and browse photos about nature. It is inspired by [Flickr](https://www.flickr.com/).

Try at the live site: [LINK]

# Index

|
[MVP Feature List](https://github.com/xwnnie/NatureClikr/wiki/Feature-List) |
[Database Schema](https://github.com/xwnnie/NatureClikr/wiki/Database-Schema) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img 

# Getting started

1. Clone this repository

   `git clone git@github.com:xwnnie/NatureClikr.git`

2. Install dependencies

   `npm install`

3. Create a .env file based on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models

   `npx dotenv sequelize db:migrate` &&
   `npx dotenv sequelize db:seed:all`

6. Start the app using:

   `npm start`

7. You can use the Demo user or create an account



### Features

NatureClikr is a website for users to upload and browse photos about nature. Logged in users can dynamically create, edit and delete photos, and add and remove favorite photos without redirecting.

Logged out users can:

- View Photos and photo details
- Search for Photos
- View user profiles

Logged in users can:

- Add/Edit/Delete Photos
- Add/Delete Favorite photos
- Search for Photos

### Home Page



### User Sign Up Page



### Add Photo Page



### Photo Detail Page



### Favorites Page



### Search Results Page




# Future Features

- Albums:
  - Logged-in users can create Albums.
  - Logged-in users can add Photos to their own Albums.
  - Logged-in users can delete their own Albums.
- Comments:
  - Logged-in users can create, edit and delete comments on photos.
- Follows:
  - Logged-in users can follow and unfollow other users.
- Google Maps:
  - Logged-in users can add address to their own Photos.
  - Address of photos will be visualized by Google Maps

# Technical Implementation
