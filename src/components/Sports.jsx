import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import '../styles/NewsList.css';
import Shimmer from "./Shimmer";
import axios from 'axios';
import { SPORTS_API } from "../assets/api";
const Sports = ()=> {
    const [newsData, setnewsData] = useState(null)
    
    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async()=>{
        try{
            const response = await axios.get(SPORTS_API)
            setnewsData(response.data.articles)
        }catch(error){
            console.log(error);
            
        }
        
        
    }
    if(newsData===null){
     return <Shimmer/>
        
    }
    return(
        
        <>
        <div id="news-card-container">
            {
                newsData
                .filter((news)=>news.title!=="[Removed]" && news.description!=="[Removed]")
                .slice(0,20)
                .map((news,index)=><NewsCard key={index} newsInfo={news} index={index}/>)
            }
        </div>
        </>
    )
}
export default Sports;