import React, { Component } from 'react'
import NewsCard from './NewsCard';
import TopHeadlines from './TopHeadlines';
import Loading from './Loading';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            topHeadlines: [],
            loading: false,
            page: 1,
            totalData: 0,
            isDataEnd: false
        }
    }

    apiKey = process.env.REACT_APP_API_KEY

    async componentDidMount() {
        const { apiKey } = this
        let allNewsUrl = `https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}&pageSize=18&page=${this.state.page}`
        let topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?q=news&apiKey=${apiKey}`
        this.setState({ loading: true })
        let data = await fetch(allNewsUrl)
        let allNews = await data.json()
        // console.log(allNews)
        this.setState({ articles: allNews.articles || [], loading: false })
        // console.log(this.articles)
        let topHeadlinesData = await fetch(topHeadlinesUrl)
        let topHeadlinesNews = await topHeadlinesData.json()
        this.setState({ topHeadlines: topHeadlinesNews.articles || [] })
        // console.log(this.state.topHeadlines)
    }

    handlePrevBtn = async () => {
        const { apiKey } = this
        let allNewsUrl = `https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}&pageSize=18&page=${this.state.page - 1}`
        window.scrollTo(0, 0)
        this.setState({ loading: true })
        let data = await fetch(allNewsUrl)
        let allNews = await data.json()
        this.setState({ articles: allNews.articles || [], loading: false, page: this.state.page - 1 })
    }

    handleNextBtn = async () => {
        const { apiKey } = this
        let allNewsUrl = `https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}&pageSize=18&page=${this.state.page + 1}`
        window.scrollTo(0, 0)
        this.setState({ loading: true })
        let data = await fetch(allNewsUrl)
        let allNews = await data.json()
        this.setState({ articles: allNews.articles || [], loading: false, page: this.state.page + 1 })
    }

    render() {
        return (
            <>
                <div className="main">
                    <div className="news-container">
                        {this.state.loading && <Loading />}
                        <div className="news-box">
                            {!this.state.loading && this.state.articles.map((element) => {
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
                    {!this.state.loading && <div className="prev-next">
                        <button disabled={this.state.page <= 1} onClick={this.handlePrevBtn} className='prevBtn'>{"<<"}</button>
                        <button disabled={this.state.isDataEnd} onClick={this.handleNextBtn} className='nextBtn'>{">>"}</button>
                    </div>}
                </div>
            </>
        )
    }
}

export default News;