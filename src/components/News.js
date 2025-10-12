import React, { Component } from 'react'
import NewsCard from './NewsCard';
import TopHeadlines from './TopHeadlines';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            topHeadlines: []
        }
    }

    apiKey = process.env.REACT_APP_API_KEY

    async componentDidMount() {
        const { apiKey } = this
        let allNewsUrl = `https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}&pageSize=18`
        let topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?q=news&apiKey=${apiKey}`
        let data = await fetch(allNewsUrl)
        let allNews = await data.json()
        // console.log(allNews)
        this.setState({ articles: allNews.articles || [] })
        // console.log(this.articles)
        let topHeadlinesData = await fetch(topHeadlinesUrl)
        let topHeadlinesNews = await topHeadlinesData.json()
        this.setState({ topHeadlines: topHeadlinesNews.articles || [] })
        // console.log(this.state.topHeadlines)
    }

    render() {
        return (
            <>
                <div className="news-container">
                    <div className="news-box">
                        {this.state.articles.map((element) => {
                            let publishDate = element.publishedAt.split("T")[0]
                            return <NewsCard key={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description} date={publishDate} author={element.author} url={element.url} />
                        })}
                    </div>
                    <div className="top-headlines">
                        <h5 className='top-headline-heading'>Top Headlines</h5>
                        {this.state.topHeadlines.map((element) => {
                            return <TopHeadlines key={element.url} url={element.url} headlineImageUrl={element.urlToImage} headlineTitle={element.description} />
                        })}
                    </div>
                </div>

            </>
        )
    }
}

export default News;