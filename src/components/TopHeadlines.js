import React, { Component } from 'react'

export class TopHeadlines extends Component {
    render() {

        const { url, headlineImageUrl, headlineTitle } = this.props

        return (
            <>
                <div className="headline-container">
                    <a target='_blank' rel='noopener noreferrer' href={url}><div className="headline-card">
                        <img src={headlineImageUrl} alt="poster" />
                        <div className="headline-title">
                            <p>{headlineTitle ? headlineTitle : ""}</p>
                        </div>
                    </div>
                    </a>
                </div>
            </>
        )
    }
}

export default TopHeadlines;