import React,{useState,useEffect} from 'react'
import "./Bucket.css"
import Card from './Card';
import {AiOutlineClose} from 'react-icons/ai'
import "../App.css"

const Bucket = ({index,title,deleteBucket}) => {

  const initialCard = localStorage.getItem(title)
  ? JSON.parse(localStorage.getItem(title))
  : [];

  const [cardName, setCardName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [card,setCard] = useState(initialCard);

  const addCard = (e)=>{
    e.preventDefault();
    setCard([...card,{
        cardname: cardName,
        url: videoUrl,
    }]);
    setCardName("");
    setVideoUrl("");
  };

  useEffect(() => {
    localStorage.setItem(title, JSON.stringify(card));
  }, [card])

  const deleteCard = (index) =>{
    const filterArr = card.filter((val,i)=>{
      return i !== index;
    });
    setCard(filterArr);
  }

console.log(card);
  return (
    <div className="bucket">
      <div className='bucket_header'>
        <h1 className='bucket_title'>{title}</h1>
        <AiOutlineClose className="close" onClick = {()=>deleteBucket(index)} />
        </div>
        <form className='bucket_form' onSubmit={addCard}>
            <input 
              type = "text" 
              placeholder='Enter Name' 
              className='card_name' 
              required
              value={cardName} 
              onChange={ e => setCardName(e.target.value)}
            />
            <input 
              type = "text" 
              placeholder='Enter Video url' 
              className='card_video' 
              required
              value={videoUrl} 
              onChange={ e => setVideoUrl(e.target.value)}
            />
            <button 
              type='submit' 
              className='card_button'>
                Add Card
            </button>
        </form>
        <div className='card'>
            { card.map((val,index) => <Card key = {index} Cardtitle = {val.cardname} video = {val.url} deleteCard = {deleteCard} index = {index}/> )}
        </div>
    </div>
  )
}

export default Bucket