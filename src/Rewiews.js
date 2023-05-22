import React , {useState} from 'react'
import people from "./data";
import {FaQuoteRight,FaAngleLeft,FaAngleRight} from "react-icons/fa";

function Rewiews() {

    const [index,setIndex]=useState(0);
    const {id,name,job,text,image}=people[index];

    const checkNumber=(number)=>{
        if(number > people.length -1)
        {
            return 0;
        }
        if(number < 0)
        {
            return people.length -1
        }
        return number ;
    }

    const next=()=>{
        setIndex(index=>{
            const nextIndex= index+1;
            return checkNumber(nextIndex);
        })
    }

    const prev=()=>{
        setIndex(index=>{
            const prevIndex = index -1;
            return checkNumber(prevIndex);
        })
    }

    const surprise=()=>{
    let randomNum=Math.floor(Math.random()*(people.length));
    if(randomNum === index)
    {
        randomNum = randomNum + 1;
    }
    setIndex(checkNumber(randomNum));
  }

    return (
        <article className="reviews">
            <div className="img-container">
                <img className="person-img" src={image} alt={name}/>
                <span className="quote-icon" >
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="auther">{name}</h4> 
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="container-btn">
                <button className="prev-btn" onClick={prev}>
                    <FaAngleLeft />
                </button>
                <button className="next-btn" onClick={next}>
                    <FaAngleRight />
                </button>
            </div>
            <button className="surprise-btn" onClick={surprise}>Surprise Me</button>
        </article>

    )
}

export default Rewiews
