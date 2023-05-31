const commentsCounter = (post) => {
    if (!post || !post.comments || post.comments.length === 0) {
      return 0;
    }
    const comments = post.comments.filter((comment) => comment.text && comment.text.trim() !== '');
    return comments.length;
  };
