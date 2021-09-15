import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <>

    
    <div>
    
    <h2 className="head__text"><center>📢📻News Updates📢📻</center></h2>
      <div>
      <video src="/video-1.mp4" autoPlay loop muted />  
      
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
          </div>
      </div>
    </div>
  </>
  );
}

export default News;
