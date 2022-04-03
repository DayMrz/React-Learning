class App extends React.Component {
  render() {
    return (
      <div>
        < Hello 
          to="Big Mom" 
          from="Nami" 
          name="Zelda" 
          salary={10000}
          num={3}
          isFunny={true}
          bangs={4}
          img="https://th.bing.com/th/id/R.d7f3867317b91acff0068bdfe8ae4b33?rik=Jfjh0QeXhwGL4A&riu=http%3a%2f%2fcdn.wallpaperhi.com%2f1920x1200%2f20120517%2fhappy+one+piece+nami+anime+manga+1920x1200+wallpaper_www.wallpaperhi.com_96.jpg&ehk=a2Z7Ni3ZnE2Ck2kWlqsKr0s0ItmRWgMzcxHynnMHJ1g%3d&risl=&pid=ImgRaw&r=0"
        />
        < Hello 
          to="Link" 
          from="Zelda" 
          salary={10000}
          num={3}
          isFunny={true}
          bangs={8}
          img="https://th.bing.com/th/id/R.316f56bb9e6cce8852fb456e992af5a7?rik=kNUq9Vap16yPEA&pid=ImgRaw&r=0"
        />
      </div>
    )
  }
}

ReactDOM.render(< App />, document.getElementById('root'))