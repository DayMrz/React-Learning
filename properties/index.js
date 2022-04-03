class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello darkness my old friend  </h1>
        < Hello to="Luffy" from="Sanji" />
        < Hello to="Big Mom" from="Nami" />
      </div>
    )
  }
}

ReactDOM.render(< App />, document.getElementById('root'))