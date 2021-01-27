import {VIDEO_ADD, VIDEO_DELETE, VIDEO_CLICK, VIDEO_SET_ACCESS_TYPE} from './actionTypes';

/*
export const mapboxReady = () => ({
  type: MAPBOX_READY,
  payload: {},
});
*/

export const addVideo = (data) => {
  return {
    type: VIDEO_ADD,
    video: data,
  };
};

export const deleteVideo = (data) => {
  return {
    type: VIDEO_DELETE,
    video: data,
  };
};

export const clickVideo = (data) => {
  return {
    type: VIDEO_CLICK,
    video: data,
  };
};

export const setAccessType = (id) => {
  return {
    type: VIDEO_SET_ACCESS_TYPE,
    accessType: id,
  }
};