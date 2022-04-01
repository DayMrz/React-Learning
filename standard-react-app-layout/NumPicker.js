function randomNumber() {
  const yourNum = Math.floor(Math.random() * 10) + 1;
  return yourNum;
}

class NumPicker extends React.Component {
  render() {
    return (
        <h1>Your number is: {randomNumber()}</h1>
    )
  }
}