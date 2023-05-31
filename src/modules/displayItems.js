import { addLike, fetchLikes } from './addLikes.js';
import itemsCounter from './addItemCounter.js';

const cards = document.getElementById('cards');

const renderCards = (array) => {
  let htmlToAppend = '';
  array.forEach((data) => {
    const card = `
  <div id="${
  data.key
}" class="flex flex-col gap-2 p-4 h-full rounded-2xl bg-[#1C1F26] drop-shadow-md border-2 border-[#a8b3cf33;] hover:border-[#1ED760;] card-color">
  <div class="w-full h-[250px] rounded-lg">
  <img class="h-[250px] w-auto rounded-lg mx-auto" src="${
  data.images?.coverart
    || data.images?.background
    || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`
}" />
  </div>
  <div class="flex flex-col gap-2 justify-between">
  <h2 class="font-semibold text-lg capitalize custom-title">${
  data.title.length < 28 ? data.title : `${data.title.substring(0, 25)}...`
}</h2>
  <h5 class="text-[#777] -mt-2"></h5>
  <div class="flex flex-col gap-1 justify-between">
  <div class="flex justify-between p-1 items-center">
  <span id="like-${data.key}" class="text-sm">no likes</span>
  <img class="h-[20px] color-white" src="./assets/adore.svg" alt="Like" />
  </div>
  <button class="btn flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]">
  <span class="text-sm">Comments</span>
  <img class="h-[20px] color-white" src="./assets/comment.svg" alt="comment" />
  </button>
  <button class="btn-2 flex justify-between bg-[#ffffff10] p-1 rounded items-center cursor-pointer hover:bg-[#ffffff20]">
  
  </div>
  </div>
  </div>
  `;
    htmlToAppend += card;
  });

  cards.innerHTML = htmlToAppend;

  fetchLikes().then((showLikes) => {
    array.forEach((data) => {
      const likeNbr = document.getElementById(`like-${data.key}`);

      const item = showLikes.find((item) => item.item_id === data.key);
      likeNbr.innerHTML = item ? `${item.likes} likes` : 'No like yet';
    });
  });

  array.forEach((data) => {
    const { key } = data;
    const likeNbr = document.getElementById(`like-${key}`);
    const likeBtn = likeNbr.parentElement.querySelector('img');

    likeBtn.addEventListener('click', () => {
      addLike(key, likeNbr);
      likeBtn.setAttribute('src', '../assets/adoreRed.svg');
    });
  });
  itemsCounter();
};

export default renderCards;
