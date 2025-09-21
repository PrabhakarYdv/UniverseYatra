import React, { Component } from 'react'

export class NewsCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?" alt='poster' className="news-poster" />
                    <div className="content">
                        <div className="title">
                            <h5>Global Markets Rally on Economic Recovery Hopeecovery Hopeecovery Hopeecovery Hopes</h5>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In corporis mollitia cum, soluta nemo fuga ab molestiae iusto et explicabo?</p>
                        </div>
                    </div>
                    <div className="meta">
                        <span>📅 21 Sept 2025</span>
                        <p>👨‍💼 Author - <span className='blink'>Prabhakar</span></p>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsCard;