import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState([
    
  ]);

  const [feedbackEdit , setFeedbackEdit] = useState({
      item:{},
      edit:false
  })

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review ?")) {
      const newData = feedback.filter((item) => item.id !== id);
      setFeedback(newData);
    }
  };

  const handleAddFeedback = (newFeedback) => {
    const newData = [newFeedback, ...feedback];
    setFeedback(newData);
  };

  const editFeedback = (item) => {
      setFeedbackEdit({
          item,
          edit:true
      })
  };

  //update feedback
  const updateFeedback = (id , updItem) => {
    setFeedback(
        feedback.map(item => item.id === id ? {...item, ...updItem} : item )
    );
    console.log(id , updItem);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        handleDelete,
        handleAddFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
