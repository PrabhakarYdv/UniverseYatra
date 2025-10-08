import React, { Component } from 'react'
import NewsCard from './NewsCard';
import TopHeadlines from './TopHeadlines';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    async componentDidMount() {
        let allNewsUrl = "https://newsapi.org/v2/everything?q=all&sortBy=popularity&apiKey=8e2949adbef941e99af93e49cdd156ca"
        let data = await fetch(allNewsUrl)
        let allNews = await data.json()
        console.log(allNews)
        this.setState({ articles: allNews.articles })
        // console.log(this.articles)
    }

    render() {
        return (
            <>
                <div className="news-container">
                    <div className="news-box">
                        {this.state.articles.map((element) => {
                            let publishDate=element.publishedAt.split("T")[0]
                            return <NewsCard key={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description} date={publishDate} author={element.author} url={element.url} />
                        })}
                    </div>
                    <div className="top-headlines">
                        <TopHeadlines />
                    </div>
                </div>

            </>
        )
    }
}

export default News;