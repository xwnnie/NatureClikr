import { useParams, useHistory } from "react-router-dom";
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

    const results = photos.filter(photo => photo.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 )

    console.log(results)

    return (
        <div className="main-container">
            <h2 id="search-h2">Search Results</h2>
            {results.map((photo) => (
            <div className="my-photo-container" key={photo.id}>
                <img
                key={photo?.id}
                src={photo?.url}
                alt={photo?.name}
                className="my-img"
                />
            </div>
            ))}            
        </div>
    )
}

export default SearchResult