class Hello extends React.Component {
  render(){
    let bangs = "!".repeat(this.props.bangs)
    console.log(this.props)
    return <div>
      <h1>Hi {this.props.to} from {this.props.from} {bangs}</h1>
      <div>
        <img src={this.props.img}/> 
      </div>
    </div> 
    
  }
}