class App extends React.Component {
  render() {
    return(
      <div>
        <h1>We Bare Bears</h1>
        <h2>Characters</h2>
        <Friend 
          name="Polar"
          hobbies= {["Cooking", "Walking with Panda and Grizz", "sleeping in the fridge"]}
        />
        <Friend 
          name="Panda"
          hobbies= {["Whatch Anime", "Chatting", "Drink Boba Tea"]}
        />
        <Friend 
          name="Grizz"
          hobbies= {["Eating", "Video Games", "Filming Movies"]}
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))