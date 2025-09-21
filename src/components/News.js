import React, { Component } from 'react'
import NewsCard from './NewsCard';

export class News extends Component {
    render() {
        return (
            <>
                <div className="news-container">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

            </>
        )
    }
}

export default News;