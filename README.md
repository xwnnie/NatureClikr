# NatureClikr

NatureClikr is a website for users to upload and browse photos about nature. It is inspired by [Flickr](https://www.flickr.com/).

Try at the live site: [LINK]

# Index

|
[MVP Feature List](https://github.com/xwnnie/NatureClikr/wiki/Feature-List) |
[Database Schema](https://github.com/xwnnie/NatureClikr/wiki/Database-Schema) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/><img  src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667"  height=40/>

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

NatureClikr is a website for users to upload and browse photos about nature. Logged in users can dynamically create, edit and delete photos and comments without redirecting.

Logged out users can:

- View Photos and Associated Comments
- Search for Photos
- View Photos by Tags 

Logged in users can:

- Add/Edit/Delete Photos
- Add/Edit/Delete Comments
- Add Photos to favorites
- Search for Photos
- View Questions by Topics/Tags 

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
- Follows:
  - Logged-in users can follow and unfollow other users.
- Google Maps:
  - Logged-in users can add address to their own Photos.
  - Address of photos will be visualized by Google Maps

# Technical Implementation
