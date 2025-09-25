import React, { Component } from 'react'
export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: "#FFFFFF"
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.randomColorGenerator, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  randomColorGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomHexCode = "#" + randomNumber.toString(16)
    this.setState({ backgroundColor: randomHexCode })
  }

  render() {

    const { backgroundColor } = this.state
    const style = {
      backgroundColor: backgroundColor
    }
    return (
      <>
        <div className="contact-container" style={style}>
          <div className="contact-box">
            <h2>UniverseYatra - Contact Us</h2>
            <div className="query-box">
              <form action="#">
                <input type="text" placeholder='Enter Your Name . . .' required />
                <input type="email" placeholder='Enter Your Email . . .' required />
                <textarea placeholder='Enter Your Message . . .' rows="10" cols="50" required></textarea>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Contact;