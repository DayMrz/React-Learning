class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
        <NumPicker />
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))