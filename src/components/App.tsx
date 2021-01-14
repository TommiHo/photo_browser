import React, { useRef, useState, useContext, useEffect } from "react";
import PhotoList from "./PhotoList";
import { Context } from "../context/PhotoContext";

const App = (): JSX.Element => {
  const { state, getPhotos } = useContext(Context);
  const [page, setPage] = useState(0);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    getPhotos(page);
  }, [page]);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <>
      <h1>Photo browser</h1>
      <PhotoList photos={state} />
      <div className="loading" ref={loader}>
        <h2>Load More</h2>
      </div>
    </>
  );
};

export default App;
