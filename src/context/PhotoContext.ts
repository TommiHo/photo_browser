import createDataContext from "./createDataContext";
import api from "../api/api";
import { AxiosResponse } from "axios";
import { PhotoType } from "../components/PhotoList";

export type DispatchType = {
  type: string;
  payload?: PhotoType[];
}

export type PhotosStateType = {
  photos: PhotoType[];
  singlePhoto: PhotoType;
}

const PhotosReducer = (state: PhotosStateType, action: { type: string; payload: PhotoType[] | PhotoType; }) => {
  switch (action.type) {
    case "get_photos":
      return {...state, photos: state.photos.concat(action.payload)};
    case "get_singlephoto":
      return {...state, singlePhoto: action.payload};
    default:
      return state;
  }
};

const getPhotos = (dispatch: React.Dispatch<DispatchType>) => {
  return async (paginationPage: number) => {
    try {
      const response: AxiosResponse = await api.get("/photos?_page=" + paginationPage);
      if (response) {
        dispatch({ type: "get_photos", payload: response.data });
      }
    } catch (e) {
      console.warn("Error getting data", e);
    }
  };
};

const getSinglePhoto = (dispatch: React.Dispatch<DispatchType>) => {
  return async (id: number) => {
    try {
      const response: AxiosResponse = await api.get("/photos?id=" + id);
      if (response) {
        dispatch({ type: "get_singlephoto", payload: {...response.data[0]} });
      }
    } catch (e) {
      console.warn("Error getting data", e);
    }
  };
};

export const { Context, Provider } = createDataContext(
  PhotosReducer,
  { getPhotos, getSinglePhoto },
  { photos: [], singlePhoto: {} }
);
