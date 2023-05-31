export const updateLikes = async (key, likes) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';
  const res = await fetch(url);
  const data = await res.json();

  data.filter((item) => {
    if (item.item_id === `${key}`) {
      likes.innerHTML = `${item.likes} likes`;
    }
    return '';
  });
};

export const addLike = async (key, likes) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${key}`,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  updateLikes(key, likes);
};

export const fetchLikes = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6b6MwShRJVij7XaDVDix/likes/';
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
