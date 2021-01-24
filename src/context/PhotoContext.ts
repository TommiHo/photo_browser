import createDataContext from "./createDataContext";
import api from "../api/api";
import { AxiosResponse } from "axios";

export type DispatchType = {
  type: string;
  payload?: PhotoType[];
};

export type PhotosStateType = {
  photos: PhotoType[];
  singlePhoto: PhotoType;
};

export type PhotoType = {
  url: string;
  id: number;
  title: string;
  thumbnailUrl: string;
  albumId: number;
};

export type PhotoListType = {
  photos: PhotoType[];
};

export type AlbumType = {
  title: string;
  id: number;
};

const PhotosReducer = (
  state: PhotosStateType,
  action: { type: string; payload: PhotoType[] | PhotoType }
) => {
  switch (action.type) {
    case "get_photos":
      return { ...state, photos: state.photos.concat(action.payload) };
    default:
      return state;
  }
};

const getPhotos = (dispatch: React.Dispatch<DispatchType>) => {
  return async (paginationPage: number) => {
    try {
      const response: AxiosResponse = await api.get(
        "/photos?_limit=50&_page=" + paginationPage
      );
      if (response) {
        dispatch({ type: "get_photos", payload: response.data });
      }
    } catch (e) {
      console.warn("Error getting data", e);
    }
  };
};

const getSinglePhoto = () => (id: number) => api.get("/photos?id=" + id);

const getAlbum = () => (id: number) => api.get("/albums?id=" + id);

export const { Context, Provider } = createDataContext(
  PhotosReducer,
  { getPhotos, getSinglePhoto, getAlbum },
  { photos: [], album: {} }
);
