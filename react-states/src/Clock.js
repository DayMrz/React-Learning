import { useState, useEffect, Component } from 'react'

export function Clock() {
  const [date, setDate] = useState(new Date())
  const [showDot, setShowDot] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 10 * 1000)

    return () => clearInterval(timer)
  }, [setDate])

  useEffect(() => {
    setShowDot(currentState => !currentState)
  }, [setShowDot, date])

  return (
    <div>
      <h1>Clock function!</h1>
      <h2>
        It is {date.toLocaleTimeString()}{showDot && <span>.</span>}
      </h2>
    </div>
  );
}

export class ClockClass extends Component {
  state = {
    date: new Date(),
    showDot: true,
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
        date: new Date()
      }),
      10 * 1000
    );

    this.dotTimerID = setInterval(
      () => this.setState(currentState => ({
        showDot: !currentState.showDot
      })),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.dotTimerID);
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Clock class!</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}{this.state.showDot && <span>.</span>}
        </h2>
      </div>
    );
  }
}

