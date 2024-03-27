import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './newspage.module.css';
import Head from '../../header/head/Head';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e7af34375320469f9b7255763373cdb0');
      setNews(response.data.articles);
    };
    fetchNews();
  }, []);


  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Head/>
      <br />
      <div className={styles.news_container}>
      <h1>Latest News</h1>
      {currentArticles.map((article) => (
        <div key={article.url}>
          <div className={styles.article_title}>
          <h2>{article.title}</h2>
          </div>
          <br />
          <br />
          <div className={styles.article_img}>
          <img src={article.urlToImage} alt="article-thumbnail" />
          </div>
          
          <div className={styles.article_desc}>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      ))}
    </div>

    <div className={styles.pagination}>
        {news.length > articlesPerPage &&
          Array(Math.ceil(news.length / articlesPerPage))
            .fill()
            .map((_, index) => (
              <button className={styles.page_btn } key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
      </div>
    </div>
    
  );
};

export default NewsPage;
