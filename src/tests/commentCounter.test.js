const commentsCounter = require('../modules/commentCounter.js');

describe('commentsCounter', () => {
  it('should return 0 when there are no comments', () => {
    const post = {
      title: 'test Post',
      content: 'This is my test',
      comments: [],
    };
    const result = commentsCounter(post);
    expect(result).toBe(0);
  });

  
});
