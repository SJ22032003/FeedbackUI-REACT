import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedData from "./components/data/FeedbackData.json";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    // localStorage.clear();
  const feedbackData = FeedData;

  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("data")) || FeedData
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review ?")) {
      const newData = feedback.filter((item) => item.id !== id);
      localStorage.setItem("data", JSON.stringify(newData));
      setFeedback(newData);
    }
  };
  const handleAddFeedback = (newFeedback) => {
    const newData = [newFeedback, ...feedback];
    localStorage.setItem("data", JSON.stringify(newData));
    setFeedback(newData);
    // console.log(newFeedback);
  };
  return (
    <>
      <Header />
      <div className={`${feedback.length === 0 ? "noFeedback" : "container"}`}>
        <FeedbackForm addFeedback={handleAddFeedback} />
        <FeedbackStats feedbackStats={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
