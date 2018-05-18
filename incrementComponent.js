class Button extends React.Component{
	handleClick = () => {
  	this.props.onClickFunc(this.props.increment);
  }
  render(){
  return(
  	<button onClick={this.handleClick}>+{this.props.increment}</button>
  )
  }
}

const Result = (props) => {
return (
	<div>{props.counter}</div>
  )
};

class App extends React.Component {
	state = { counter : 0 };
  handleClick = (increment) => {
  	this.setState((prevState) => {
    	return {
      	counter: prevState.counter + increment
      }
    })
  }
  render(){
  	return(
    	<div>
    	<Button increment={1} onClickFunc={this.handleClick} />
      <Button increment={5} onClickFunc={this.handleClick} />
      <Button increment={9} onClickFunc={this.handleClick} />
      <Button increment={10} onClickFunc={this.handleClick} />
      <Result counter={this.state.counter} />
      </div>
    )
  }
  
}
ReactDOM.render(<App />, mountNode)
