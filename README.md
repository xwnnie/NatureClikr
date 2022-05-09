# NatureClikr

NatureClikr is a website for users to upload and browse photos about nature. It is inspired by [Flickr](https://www.flickr.com/).

Try at the live site: [NatureClikr](https://nature-clikr.herokuapp.com/)

## Techs/languages/APIs 
JavaScript, Express, Postgres, Sequelize, HTML5, CSS, React, Redux, Pexel API

## Getting started

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



## Features

NatureClikr is a website for users to upload and browse photos about nature. Logged in users can dynamically create, edit and delete photos, and add and remove favorite photos without redirecting. Logged in users can:
- View All Photos and photo details
- Add/View/Edit/Delete their own Photos
- Add/View/Delete their Favorite photos
- Add/View/Delete their comments on photos
- Search for Photos by name

### Splash Page
<img width="1385" alt="splash-page" src="https://user-images.githubusercontent.com/50897748/167223325-37436956-9d43-495a-a844-6841879ed4f2.png">

### Home Page
<img width="1390" alt="homepage" src="https://user-images.githubusercontent.com/50897748/167223269-3b4c047f-473c-4568-8839-728c1764ef92.png">


### User Sign Up Page

<img width="1386" alt="sign-up" src="https://user-images.githubusercontent.com/50897748/167223093-f0049dd2-fe4d-4199-8b72-954bed2fcbe5.png">


### Add Photo Page
<img width="1381" alt="upload" src="https://user-images.githubusercontent.com/50897748/167223129-9ad933fc-f13f-454d-949e-aa16965bf659.png">


### Photo Detail Page
<img width="1388" alt="photo-detail" src="https://user-images.githubusercontent.com/50897748/167223142-d2f7d62e-75e4-4d9e-a86a-605ad7cec9bd.png">


### User Personal Page
<img width="1388" alt="personal-page" src="https://user-images.githubusercontent.com/50897748/167223162-10a50fd7-96d7-4cd2-9ea6-5c68616580f5.png">


### Search Results Page
<img width="1390" alt="search-results" src="https://user-images.githubusercontent.com/50897748/167223174-3ae376b9-ab2f-4862-8369-794f28432cd2.png">


## Technical Implementations

1. The reducer to load, add and remove a fave from the fave state.
```javascript
const faveReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allFavePhotos = {};
        action.favePhotos.forEach((photo) => {
          allFavePhotos[photo.id] = photo;
        });
        return {
          ...state,
          ...allFavePhotos,
        };
      }
      case ADD: {
          return {
            ...state, 
            [action.photo.id]: action.photo
          }
      }
      case REMOVE: {
          const newState = {...state}
          delete newState[action.photoId]
          return newState
      }
      default:
        return state;
    }
}
```

2. The <FaveStar /> Component to dynamically add or remove a fave.
```javascript

const FaveStar = ({ photoId }) => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const faves = useSelector((state) => state.faves);

  const isFave = faves[photoId] ? true : false;
  const [fave, setFave] = useState(isFave);

  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

  const handleCheckboxChange = async (checked) => {
    if (checked) {
      setFave(true);
      dispatch(addFave(sessionUser.id, photoId));
    } else {
      setFave(false);
      dispatch(removeFave(sessionUser.id, photoId));
    }
  };

  return (
    <input
      className="star"
      id="faves-page-star"
      type="checkbox"
      name="addFave"
      checked={isFave}
      onChange={(e) => {
        handleCheckboxChange(e.target.checked);
      }}
    />
  );
};
```


## Future Features

- Albums:
  - Logged-in users can create Albums.
  - Logged-in users can add Photos to their own Albums.
  - Logged-in users can delete their own Albums.
- Follows:
  - Logged-in users can follow and unfollow other users.
- Google Maps:
  - Logged-in users can add address to their own Photos.
  - Address of photos will be visualized by Google Maps
