import React,{useState,useEffect} from 'react'
import Bucket from './Bucket'
import "./HomeScreen.css"
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {

    const initialBucket = localStorage.getItem("bucket")
    ? JSON.parse(localStorage.getItem("bucket"))
    : [];
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [bucket, setBucket] = useState(initialBucket);

    useEffect(()=>{
      localStorage.setItem("bucket", JSON.stringify(bucket));
      },[bucket]);
    
      const addBucket = (e)=>{
        e.preventDefault();
        setBucket([...bucket,{
            name: input,
        }]);
        setInput("");
      };
      console.log(bucket);

      const deleteBucket = (index) =>{
        const filterArr = bucket.filter((val,i)=>{
          return i !== index;
        });
        setBucket(filterArr);
      }

    return (
    <>
        <div className = "home_header">
            <div className="title" >
                Convin 
            </div>
            <form className='sub_header' onSubmit={addBucket}>
            <input 
              placeholder='Enter the name of the bucket' 
              className="bucket_text" 
              
              value={input} 
              onChange={ e => setInput(e.target.value)} />
            <button 
              type='submit' 
              className='bucket_button'>
                Create Bucket
            </button>
            <button onClick ={() => navigate("/history")}> Show History </button>
            </form>
        </div>
        <hr className="line"></hr>
        <br />
        <div className='home_body'>
            {bucket.map((value,index)=>(
            <Bucket
                key = {index}
                index = {index}
                title = {value.name} 
                deleteBucket = {deleteBucket}
            />
        ))}
        </div>
    </>
    
  )
}

export default HomeScreen