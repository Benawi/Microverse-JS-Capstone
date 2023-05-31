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