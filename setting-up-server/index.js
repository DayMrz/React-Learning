// class Hello extends React.Component{
//   render(){
//     return  (
//       <div>
//         <h1>Hello There!</h1>
//         <h1>Hello There!</h1>
//         <h1>Hello There!</h1>
//       </div>
//     )
//   }
// }

// function Hello(){
//   return  (
//     <div>
//       <h1>Hello There!</h1>
//       <h1>Hello There!</h1>
//       <h1>Hello There!</h1>
//     </div>
//   )
// }


// ReactDOM.render(<Hello />, document.getElementById('root'))



class JSXDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Holi, I don't drink coffee</h1>
        <img src="https://images.unsplash.com/photo-1513876585916-61d40895c50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Mzk3NzcwfHxlbnwwfHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&q=60" /> 
      </React.Fragment>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));