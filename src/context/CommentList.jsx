import React, { useEffect, useState } from 'react';
import { useComments } from './CommentsContext';
import '../css/context/comments.css'
const CommentList = () => {
  const { state, addComment } = useComments();
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };
  useEffect(() => {
    const commentItems = document.querySelectorAll('.comment-list li');
    commentItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 100); 
    });
  }, [state.comments]);
  return (
    <div className="comments-container">
      <h3>Коментарі:</h3>
      
      <div className="comment-input">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ваш коментар"
        />
        <button onClick={handleAddComment}>Додати коментар</button>
        <ul className='comment-list'>
        {state.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CommentList;
