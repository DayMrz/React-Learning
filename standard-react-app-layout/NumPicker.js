function randomNumber() {
  const yourNum = Math.floor(Math.random() * 10) + 1;
  return yourNum;
}

class NumPicker extends React.Component {
  render() {
    const num = randomNumber()
    let msg;
    if( num === 7) {
      msg = 
      <div>
        <h2> yay!! Good luck</h2>
        <img src="https://th.bing.com/th/id/R.71379f695df657a31c2dfe626828865b?rik=BLveCFLJzKD9WA&riu=http%3a%2f%2f25.media.tumblr.com%2f03b92099dbb8bad53beaa81c7c5980c8%2ftumblr_mliiqdkm2O1rrnu5fo1_500.gif&ehk=UOWWe7dv%2bIh7s8ku%2fIyPaorw90qCyN2c0APKeImJXDA%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
    } else {
      msg = 
      <div>
      <h2> Buuuuu! bad luck</h2>
      <img src="https://th.bing.com/th/id/R.36015026b39a2085521d4532fbcef05c?rik=PQ5YeVpxgzqMew&pid=ImgRaw&r=0"/>
    </div>
      
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    )
  }
}