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
    const { date, showDot } = this.state;

    return (
      <div>
        <h1>Clock class!</h1>
        <h2>
          It is {date.toLocaleTimeString()}{showDot && <span>.</span>}
        </h2>
      </div>
    );
  }
}


export class TestClass extends Component {
  state = {
    boolean: true,
    string: 'string',
    object: {
      property1: 'value',
      property2: 'value',
    },
    flag: 1
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      object: {
        ...state.object,
        property1: state.string,
      },
      flag: state.boolean ? 1 : 0
    }
  }

  render() {
    return (
      <>
        <h1>Class</h1>
        <div>
          {JSON.stringify(this.state)}
        </div>
        <div>
          <button
            onClick={
              () => this.setState(current => ({ boolean: !current.boolean }))
            }>
            Change boolean
          </button>

          <button
            onClick={
              () => this.setState({ string: `string ${Math.random() * 10}`.slice(0, 10), boolean: 'test' })
            }>
            Change string
          </button>

          <button
            onClick={
              () => this.setState(current => ({
                object: {
                  ...current.object,
                  property3: '3'
                }
              }))
            }>
            Change object
          </button>
        </div>
      </>
    );
  }
}

export function Test() {
  const [boolean, setBoolean] = useState(true)
  const [string, setString] = useState('string')
  const [object, setObject] = useState({
    property1: 'value',
    property2: 'value',
  })
  const [flag, setFlag] = useState(1)

  useEffect(() => {
    setFlag(boolean ? 1 : 0)
  }, [boolean, setFlag])

  useEffect(() => {
    setObject(current => (
      {
        ...current,
        property1: string
      }
    ))
  }, [string, setObject])

  return (
    <>
      <h1>Function</h1>
      <div>
        {JSON.stringify({
          boolean,
          string,
          object,
          flag,
        })}
      </div>
      <div>
        <button
          onClick={
            () => setBoolean(current => !current)
          }>
          Change boolean
        </button>

        <button
          onClick={
            () => setString(`string ${Math.random() * 10}`.slice(0, 10))
          }>
          Change string
        </button>

        <button
          onClick={
            () => setObject(current => ({
              ...current,
              property3: '3'
            }))
          }>
          Change object
        </button>
      </div>
    </>
  );
}