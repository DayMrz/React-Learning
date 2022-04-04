class App extends React.Component {
  render(){
    return(
      <div>
        <h1> si sirvo :3</h1>
        <Hello 
          to="Julia"
          from="Andrew"
          bang={4}
        />
        <Hello 
          to="Julia"
          bang={4}
        />
        <Hello 
          to="Tom"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') )