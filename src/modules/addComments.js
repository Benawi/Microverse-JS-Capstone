const getComments = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/comments?item_id=${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const addComment = async (itemId, name, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment,
    }),
  });
};

const commentsPopUp = () => {
  const likeBtns = Array.from(document.getElementsByClassName('btn'));
  const pop = document.querySelector('.pop');
  pop.setAttribute('style', 'display: none;');

  const createPopup = async (data) => {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn', 'text-4xl', 'pb-2', 'cursor-pointer', 'text-right');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
      popup.remove();
      pop.setAttribute('style', 'display: none;');
    });

    const popupImgContainer = document.createElement('div');
    popupImgContainer.classList.add('img-container', 'rounded-lg');

    const popupImg = document.createElement('img');

    popupImg.src = data.images?.coverart || data.images?.background || `https://dummyimage.com/400x400/000/1aff00&text=${data.title}`;

    const popupTitle = document.createElement('h3');
    popupTitle.classList.add('text-3xl', 'font-bold', 'pt-4');
    popupTitle.innerHTML = data.title;

    const artist = document.createElement('h4');
    artist.classList.add('text-[#777]', '-mt-2');
    artist.innerHTML = data.artists[0].alias;

    const commentsTitle = document.createElement('h3');
    const comments = await getComments(data.key);

    commentsTitle.classList.add('text-[#1ED760]', 'mt-4');
    commentsTitle.textContent = `Comments (${comments.length ? comments.length : '0'})`;

    const commentList = document.createElement('ul');
    commentList.classList.add('comment-list');
    if (comments.length > 0) {
      comments.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `${comment.creation_date} <strong>${comment.comment} : </strong>  ${comment.username}`;
        commentList.appendChild(commentItem);
      });
    } else {
      const noCommentItem = document.createElement('li');
      noCommentItem.innerHTML = 'No comments yet';
      commentList.appendChild(noCommentItem);
    }

    const formTitle = document.createElement('h3');
    formTitle.innerHTML = 'Add a comment';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.classList.add('comment-input');
    commentInput.placeholder = 'Enter your name...';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('name-input');
    nameInput.placeholder = 'Enter a comment...';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerHTML = 'Comment';

    const form = document.createElement('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const commentInput = event.target.querySelector('.comment-input');
      const comment = commentInput.value.trim();
      const nameInput = event.target.querySelector('.name-input');
      const name = nameInput.value.trim();
      if (comment) {
        addComment(data.key, name, comment);
        const comments = await getComments(data.key);

        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${comment}:</strong> ${name}`;
        commentList.appendChild(commentItem);

        commentsTitle.textContent = `Comments (${comments.length})`;
        commentInput.value = '';
        nameInput.value = '';
      }
    });

    form.appendChild(commentInput);
    form.appendChild(nameInput);
    form.appendChild(submitBtn);

    const popupHeader = document.createElement('div');
    popupHeader.classList.add('popup-header');
    popupHeader.appendChild(closeBtn);

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupImgContainer.appendChild(popupImg);
    popupContent.appendChild(popupImgContainer);
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(artist);
    popupContent.appendChild(commentsTitle);
    popupContent.appendChild(commentList);
    popupContent.appendChild(formTitle);
    popupContent.appendChild(form);

    popup.appendChild(popupHeader);
    popup.appendChild(popupContent);
    pop.appendChild(popup);
  };

  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async () => {
      pop.setAttribute('style', 'display: block;');
      const cardKey = likeBtn.parentNode.parentNode.parentNode.id;
      const data = JSON.parse(localStorage.getItem('songs')).find((song) => song.key === cardKey);
      createPopup(data);
    });
  });
};

export default commentsPopUp;
