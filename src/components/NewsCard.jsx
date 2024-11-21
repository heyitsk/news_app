import '../styles/NewsList.css'

const NewsCard = (props) =>{
    // console.log(props);
    const{newsInfo} = props;
    // console.log(newsInfo);
    const{title,urlToImage,description} = newsInfo;
    
    return(
        
        <div className="card">
                <img src={urlToImage} alt="Card Image" className="card-image"/>
                <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                </div>
        </div>
    )
}
export default NewsCard;