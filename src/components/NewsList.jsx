import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import '../styles/NewsList.css';
import Shimmer from "./Shimmer";
import axios from 'axios';
import { SEARCH_API } from "../assets/api.js";
import { API_KEY } from "../assets/api";
import { HEADLINES_API } from "../assets/api.js";

const NewsList = () =>{
    const [newsData, setnewsData] = useState(null)
    const [filterData, setfilterData] = useState(null)
    const [searchText, setsearchText] = useState("")
    const [searching,setsearching] = useState(false)

    
    useEffect(()=>{
        fetchData1();
    },[])
    

    const fetchData1 = async()=>{
        try{
            const response = await axios.get(HEADLINES_API)
        // const json = await data.json()
        // console.log(json.articles);
        setnewsData(response.data.articles)
         // console.log(response);
        // console.log(response.data);
        // console.log(newsData);
        }catch(error){
            console.log(error);
            
        }
    }
    
    const fetchData2 = async() => {
        if(searchText===""){
            setsearching(false)
        }
        try{
            const searchResponse = await axios.get(SEARCH_API+searchText.toLowerCase()+API_KEY)
            setfilterData(searchResponse.data.articles)
            setsearching(true)
        }
        catch(error){
            console.log(error);
            
        }
    }
    const handleSearchClick = () => {
        fetchData2()
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearchClick();
        }
      };

    if(newsData===null){
        return <Shimmer/>
           
       }


    return(
        <>
        <div id='search-container'>
                <input type='text' placeholder='Search..' value={searchText} 
                onChange={(e)=>
                    setsearchText(e.target.value)
                } onKeyDown={handleKeyDown}></input>
                <button id="search" onClick={handleSearchClick}>Search</button>
                
        </div>
        <div id="news-card-container">
            {
                (searching?filterData:newsData)
                .filter((news)=>news.title!=="[Removed]" && news.description!=="[Removed]")
                .slice(0,20)
                .map((news,index)=><NewsCard key={index} newsInfo={news} index={index}/>)
            }
        </div>
        </>
    )
}
export default NewsList;