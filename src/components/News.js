import React, { Component } from 'react'
import NewsCard from './NewsCard';
import TopHeadlines from './TopHeadlines';

export class News extends Component {
    render() {
        return (
            <>
                <div className="news-container">
                    <div className="news-box">
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    </div>
                    <div className="top-headlines">
                    <TopHeadlines/>
                    </div>
                </div>

            </>
        )
    }
}

export default News;