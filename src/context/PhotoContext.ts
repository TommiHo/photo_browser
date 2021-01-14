import createDataContext from "./createDataContext";
import api from "../api/api";
import { AxiosResponse } from "axios";

export type DispatchType = {
  type: string;
  payload?: any;
}

const PhotosReducer = (state: any[], action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "get_photos":
      return state.concat(action.payload);
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

export const { Context, Provider } = createDataContext(
  PhotosReducer,
  { getPhotos },
  []
);
