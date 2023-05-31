const url=''

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
  