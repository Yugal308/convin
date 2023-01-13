import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./History.css"

const History = () => {

    const initialHistory = localStorage.getItem("records")
    ? JSON.parse(localStorage.getItem("records"))
    : [];

    const [his,setHis] = useState(initialHistory);
    const navigate = useNavigate();

    const clearHistory = () =>{
        setHis([]);
    }
    useEffect(()=>{
        localStorage.setItem("records", JSON.stringify(his));
    },[his]);

    return (
    <div className="history">
        <div className="title" >
            History 
        </div>
        <div className="history_btns">
          <button onClick ={() => navigate("/")}>Home</button>
          <button onClick={clearHistory} >Clear</button>
        </div>
        <hr className="line"></hr>
        <br />
        <div className="history_content">
            {his.map((value,index)=>(
                <>
                    <li><span>Name:</span> {value.cardname} </li>
                        <span id="time">TimeStamp: </span> {value.timestamp} 
                </>
            ))}
        </div>
    </div>
  )
}

export default History