import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import { AlbumType, Context, PhotoType } from "../context/PhotoContext";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";

export default function SinglePhoto(): JSX.Element {
  const {
    getSinglePhoto,
    getAlbum,
  }: {
    getSinglePhoto: (id: string) => Promise<AxiosResponse>;
    getAlbum: (id: string) => Promise<AxiosResponse>;
  } = useContext(Context);

  const [photoData, setPhotoData] = useState<PhotoType>();
  const [albumData, setAlbumData] = useState<AlbumType>();
  const [error, setError] = useState("");
  const [isFetching, setFetchingStatus] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setFetchingStatus(true);
    getSinglePhoto(id)
      .then((photo) => {
        getAlbum(photo.data[0].albumId)
          .then((album) => {
            setAlbumData(album.data[0]);
            setPhotoData(photo.data[0]);
            setFetchingStatus(false);
          })
          .catch((error) => {
            const errorMessage =
              "Couldn't fetch the album data, " + error.toString();
            setError(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage =
          "Couldn't fetch the photo data, " + error.toString();
        setError(errorMessage);
      });
  }, []);

  return (
    <>
      <Header />
      {photoData && (
        <>
          <img
            alt={photoData.title}
            className="singlephoto__img"
            src={photoData.url}
          />
          <div className="singlephoto__details">
            <p>
              <b>Title:</b> {photoData.title}
            </p>
            {albumData && (
              <p>
                <b>Album: </b> {albumData.title}
              </p>
            )}
          </div>
        </>
      )}
      {isFetching && <p>Fetching data...</p>}
      {error && <div className="error">{error}</div>}
    </>
  );
}
