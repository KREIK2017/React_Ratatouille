import React, { createContext, useContext, useReducer } from 'react';

const CommentsContext = createContext();


const ADD_COMMENT = 'ADD_COMMENT';
const initialComments = [
  'Цей рецепт просто чудовий!',
  'Я вже готував це, і це справжній шедевр.',
  'Дякую за рецепт, всі вдома були вражені!',
];

const commentsReducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};


const CommentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentsReducer, { comments: initialComments });


  const addComment = (comment) => {
    dispatch({ type: ADD_COMMENT, payload: comment });
  };

  return (
    <CommentsContext.Provider value={{ state, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider');
  }
  return context;
};

export { CommentsProvider, useComments };
