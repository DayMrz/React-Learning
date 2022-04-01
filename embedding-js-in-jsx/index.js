function getMood() {
  const moods = ['Angry 😡', 'Hungry 😋', 'Silly 😅', 'Quite 😶', 'Paranoid 🙀', 'Nerdy 🤓']
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
    <div>
      <h1>Hey! My mood today is {getMood()}</h1>
    </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))