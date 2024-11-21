import '../styles/NewsList.css'
import { BREAKINGNEWS_URL } from '../assets/links';

const NewsCard = (props) =>{
    const defaultImage = BREAKINGNEWS_URL
    // console.log(props);
    const{newsInfo} = props;
    // console.log(newsInfo);
    const{title,urlToImage,description} = newsInfo;
    
    return(
        
        <div className="card">
                <img src={urlToImage||defaultImage} alt="Card Image" className="card-image"/>
                <div className="card-content">
                <h2 className="card-title">{title||"No Title Available"}</h2>
                <p className="card-description">{description||"No Description Available- Click and Read about it"}</p>
                </div>
        </div>
    )
}
export default NewsCard;