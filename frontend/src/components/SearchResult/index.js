import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPhotos } from "../../store/photos";

import "./SearchResult.css";

const SearchResult = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    const { searchQuery } = useParams();

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);
    photos.sort((a, b) => {
        const keyA = new Date(a.createdAt);
        const keyB = new Date(b.createdAt);
        return keyA > keyB ? -1 : 1;
    });

    const results = photos.filter(photo => photo?.name?.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 )

    return (
      <div className="main-container">
        <h2 id="search-h2">
          Search Results for
          <span> "{searchQuery}" </span>
        </h2>
        {!results.length ? (
          <div className="no-search-div">
            <i className="fa-solid fa-otter" id="no-search-icon"></i>
            <div id="no-search-msg">
              "No results found. Try another search please."
            </div>
          </div>
        ) : (
          results.map((photo) => (
            <div
              className="my-photo-container search-result-container"
              key={photo.id}
            >
              <Link
                to={{
                  pathname: `/search/results/${photo?.id}`,
                  state: { results },
                }}
                className="search-result-link"
              >
                <img
                  key={photo?.id}
                  src={photo?.url}
                  alt={photo?.name}
                  className="my-img"
                />
              </Link>
            </div>
          ))
        )}
      </div>
    );
}

export default SearchResult