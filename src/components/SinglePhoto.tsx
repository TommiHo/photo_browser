import React, { useEffect, useContext } from "react";
import Header from "./Header";
import { Context, PhotosStateType } from "../context/PhotoContext";
import { useParams } from "react-router-dom";

export default function SinglePhoto(): JSX.Element {
  const {
    state,
    getSinglePhoto,
  }: {
    state: PhotosStateType;
    getSinglePhoto: (id: string) => void;
  } = useContext(Context);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getSinglePhoto(id);
  }, []);

  return (
    <div>
      <Header />
      Singlephoto
      <img src={state.singlePhoto.url}></img>
    </div>
  );
}
