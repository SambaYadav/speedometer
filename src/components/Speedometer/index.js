// Write your code here
import {Component} from 'react'

import './index.css'

class SpeedoMeter extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBreaks = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          className="speedo-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading2">
          Speed is
          <span className="span-elemant"> {speed} </span>
          mph
        </h1>
        <p className="description"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="button-container">
          <button className="button1" type="button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button
            className="button2"
            type="button"
            onClick={this.onApplyBreaks}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
