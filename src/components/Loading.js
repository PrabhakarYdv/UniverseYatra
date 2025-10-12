import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <>
                <div className="loader-circle">
                    <div className="wave wave"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                    <div className="loading-text">Loading...</div>
                </div>
            </>
        )
    }
}

export default Loading