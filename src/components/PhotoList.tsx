import React from "react";

export type PhotoType = {
  url: string;
};

export type PhotoListType = {
  photos: PhotoType[];
};

const PhotoList = ({ photos }: PhotoListType): JSX.Element => {
  return (
    <>
      <ul className="photolist">
        {photos &&
          photos.map((photo, index) => (
            <li className="photolist__item" key={index}>
              <img className="photolist__image" src={photo.url}></img>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PhotoList;
