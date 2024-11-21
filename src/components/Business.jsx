import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import '../styles/NewsList.css';
import Shimmer from "./Shimmer";
import axios from 'axios';

const Business = ()=> {
    const [newsData, setnewsData] = useState(null)
    
    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async()=>{
        try{
            const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=3a715e2372ef43199f90feaa865c8d26")
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
export default Business;