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

  it('should return the number of comments', () => {
    const post = {
      title: 'test Post',
      content: 'This is my test',
      comments: [
        { id: 1, text: 'test case!' },
        { id: 2, text: 'I code well.' },
        { id: 3, text: 'test 12.' },
      ],
    };
    const result = commentsCounter(post);
    expect(result).toBe(3);
  });

  
});
