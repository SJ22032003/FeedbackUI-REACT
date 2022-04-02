import React from 'react'
import {useState} from 'react'
import { v4 as uuid} from 'uuid';
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm(props) {
    const [text,setText] = useState("");
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState("");
    const [rating,setRating] = useState(10);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== "" && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage("Please write more...");
        }else{
            setBtnDisabled(false);
            setMessage("");
        }
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                id:uuid(),
                text: text,
                rating: rating,
            };
            props.addFeedback(newFeedback);
            setText('');
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate this project ?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}></input>
                <Button type='submit' isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm