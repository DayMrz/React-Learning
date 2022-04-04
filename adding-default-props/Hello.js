class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bang: 1
  }
  render() {
    const {from, to, bang} = this.props
    let bangs = "!".repeat(bang)
    return(
      <div>
        <h1>Letters</h1>
        <p>
          Hi {to} from {from}{bangs}
        </p>
      </div>

    )
  }
}