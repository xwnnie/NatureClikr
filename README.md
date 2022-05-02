# NatureClikr

NatureClikr is a website for users to upload and browse photos about nature. It is inspired by [Flickr](https://www.flickr.com/).

Try at the live site: [NatureClikr](https://nature-clikr.herokuapp.com/)


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

Logged in users can:
- View All Photos and photo details
- Add/View/Edit/Delete their own Photos
- Add/View/Delete their Favorite photos
- Search for Photos by name

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
