export const updateLikes = async (key, likes) => {
  const url = `http://localhost:3000/posts/${key}`;
  const response = await fetch(url);
  const data = await response.json();
  data.filter((item) => {
    if (item.id === '${key}') {
      likes.innerHTML = '${item.likes} likes';
    }
    return '';
  });
};

const addLikes = async (key, likes) => {
  const url = `http://localhost:3000/posts/${key}`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: '${key}',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
