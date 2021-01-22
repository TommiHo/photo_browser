import React, { useRef, useState, useContext, useEffect } from "react";
import PhotoList from "./PhotoList";
import { Context, PhotosStateType } from "../context/PhotoContext";
import Header from "./Header";

export default function PhotoGallery(): JSX.Element {
  const {
    state,
    getPhotos,
  }: {
    state: PhotosStateType;
    getPhotos: (paginationPage: number) => void;
  } = useContext(Context);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    getPhotos(page);
  }, [page]);

  return (
    <>
      <Header />
      <PhotoList photos={state.photos} />
      <div ref={loader}></div>
    </>
  );
}
