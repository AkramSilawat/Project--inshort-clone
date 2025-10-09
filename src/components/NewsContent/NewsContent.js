import { Container } from '@mui/material'
import React from 'react'
import "./NewsContent.css";
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        <hr />
        <button className='loadMore'> Load More</button>
      </div>
    </Container>
  )
}

export default NewsContent