import React,{useState,useEffect} from 'react'
import "./Card.css"
import ReactPlayer from 'react-player';

const Card = ({Cardtitle, video, deleteCard,index}) => {
  const [showVideo, setShowVideo] = useState(false);

  const initialHistory = localStorage.getItem("records")
  ? JSON.parse(localStorage.getItem("records"))
  : [];

  const [history,setHistory] = useState(initialHistory);

  const record = () =>{
    setShowVideo(!showVideo)
    setHistory([...history,{
        cardname: Cardtitle,
        timestamp: new Date().getTime()
    }]);
  }

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(history));
  }, [history])

  console.log(history)

  return (
    <div className="card">
        <div className = "card_content"> 
          <p onClick={record} className="card_title"><span>Name :</span> {Cardtitle}</p>
          <p onClick={record}className='card_link'><span>Link :</span> {video} </p>
        </div>
        <button 
          className='card_del'
          onClick = {()=>deleteCard(index)}>
            Delete
        </button>
        { showVideo ?<div className="card_video" > <ReactPlayer className="player" width="90vw" height="440px" url = {video} controls = {true} /> </div> : <></>}
    </div>
  )
}

export default Card