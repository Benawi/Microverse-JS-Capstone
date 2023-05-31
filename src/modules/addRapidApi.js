import commentsPopUp from './addComments.js';
import renderCards from './displayItems.js';
import { url, options } from './api.js';

const getShazamTracks = async () => {
  if (localStorage.getItem('songs')) {
    const localStorageItem = localStorage.getItem('songs');
    const songs = JSON.parse(localStorageItem);

    renderCards(songs);
    commentsPopUp();
  } else {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result && result.tracks) {
        const songs = result.tracks;
        localStorage.setItem('songs', JSON.stringify(songs));

        renderCards(songs);
        commentsPopUp();
      } else {
        throw new Error('Failed to get Shazam tracks');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};
export default getShazamTracks;
