import React, { Component } from 'react'

export class NewsCard extends Component {


    render() {

        const { imageUrl, title, description, date, author, url } = this.props

        return (
            <>
                <a target='_blank' rel='noopener noreferrer' href={url}><div className="card" title={title?title:""}>
                    <img src={imageUrl} alt='poster' className="news-poster" />
                    <div className="content">
                        <div className="title">
                            <h5>{title?title:""}</h5>
                        </div>
                        <div className="description">
                            <p>{description?description:""}</p>
                        </div>
                    </div>
                    <div className="meta">
                        <span>📅 {date?date:""}</span>
                        <p>👨‍💼 Author - <span className='blink'>{author?author:""}</span></p>
                    </div>
                </div>
                </a>
            </>
        )
    }
}

export default NewsCard;