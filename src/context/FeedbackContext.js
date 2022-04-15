import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  async function fetchFeedback() {
    try {
      const response = await fetch(
        `https://feedback-ui-backend.herokuapp.com/feedback?_sort=id&_order=desc`
      );
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review ?")) {
      await fetch(`https://feedback-ui-backend.herokuapp.com/feedback/${id}`, {
        method: "DELETE",
      });
      const newData = feedback.filter((item) => item.id !== id);
      setFeedback(newData);
    }
  };

  async function handleAddFeedback(newFeedback) {
    try {
      const response = await fetch(`https://feedback-ui-backend.herokuapp.com/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });
      const data = await response.json();
      const newData = [data, ...feedback];
      setFeedback(newData);
    } catch (error) {
      console.log(error);
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update feedback
  async function updateFeedback(id, updItem) {
    try {
      const response = await fetch(`https://feedback-ui-backend.herokuapp.com/feedback/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updItem),
      });
      const data =  await response.json();
      console.log(data);

      setFeedback(
        feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        handleDelete,
        isLoading,
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
