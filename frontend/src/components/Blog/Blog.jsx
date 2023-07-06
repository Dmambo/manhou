import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Blog.css';

const Blog = () => {
  const [news, setNews] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=shipping&apiKey=d968cbfd991e441388974fda03c6cd4b'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleViewMore = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=shipping&apiKey=d968cbfd991e441388974fda03c6cd4b'
      );
      setNews(response.data.articles);
      setVisibleArticles(2);
    } catch (error) {
      console.log(error);
    }
  };

  const truncatedDescription = (description) => {
    if (description.length > 100) {
      return description.substring(0, 100) + '...';
    }
    return description;
  };

  const visibleNews = news.slice(0, visibleArticles);

  return (
    <div className='blog' id='blog'>
      <div className='blogs'>
        <div className='blog__content'>
          <div className='blog__text'>
            <h1>Shipping News</h1>
            <p>Update yourself with the latest shipping news</p>
          </div>
          <div className='viewmore'>
            {news.length > visibleArticles && (
              <button onClick={handleViewMore}>View More</button>
            )}
          </div>
        </div>
        <div className='news'>
          {visibleNews.map((article) => (
            <div key={article.title}>
              
              <br />
              <div className='immage'>
                <img src={article.urlToImage} alt={article.title} />
              </div>
              <div className='blog__info'>
                <p>{article.publishedAt.substring(0, 10)}</p>
                <h2>{article.title}</h2>
                <p>{truncatedDescription(article.description)}</p>
                <div className='readmore'>
                <a href={article.url} target='_blank' rel="noreferrer">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
