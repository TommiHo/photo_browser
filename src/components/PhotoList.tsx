import React from "react";
import { useHistory } from "react-router-dom";
import { PhotoType } from "../context/PhotoContext";

export default function PhotoList({
  photos,
}: {
  photos: PhotoType[];
}): JSX.Element {
  const history = useHistory();

  return (
    <>
      <ul className="photolist">
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <li
              className="photolist__item"
              key={index}
              onClick={() => history.push("/photo/" + photo.id)}
            >
              <img
                alt={photo.title}
                className="photolist__image"
                src={photo.thumbnailUrl}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
