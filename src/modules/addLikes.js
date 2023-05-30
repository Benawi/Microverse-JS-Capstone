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
