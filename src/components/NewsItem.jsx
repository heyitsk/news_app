import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import '../styles/NewsList.css';
import Shimmer from "./Shimmer";

const NewsItem = () =>{
    const [newsData, setnewsData] = useState([""])
    
    useEffect(()=>{
        fetchData();
    },[])
    

    const fetchData = async()=>{
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3a715e2372ef43199f90feaa865c8d26")
        const json = await data.json()
        // console.log(json.articles);
        setnewsData(json.articles)
        // console.log(newsData);
        
        
    }
    if(newsData==="") return <Shimmer/>

    return(
        <div id="news-card-container">
            {
                newsData.map((news,index)=><NewsCard key={index} newsInfo={news} index={index}/>)
            }
        </div>
    )
}
export default NewsItem;