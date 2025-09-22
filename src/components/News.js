import React, { Component } from 'react'
import NewsCard from './NewsCard';

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
                    </div>
                    <div className="top-headlines">

                    </div>
                </div>

            </>
        )
    }
}

export default News;