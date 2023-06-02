import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState("");
   const inputChanging=(event)=>{
    if(event.target.id=="rating"){
      setRating(event.target.value)
    }
    else if(event.target.id=="comment"){
      setComment(event.target.value)
    }
   }
   const lastly=(event)=>{
     event.preventDefault()
   }
  //  console.log(inputChanging)
  return (
    <div id="main">
      <form onChange={inputChanging} onSubmit={lastly}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
          />
          <span className='rating' >{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment:</label>
          <textarea 
            id='comment' 
          />
          {comment&&comment.length<5&&<p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
