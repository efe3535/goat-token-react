import './App.css';
import { Helmet } from 'react-helmet'
import { createElement, Component } from 'react';
import reactDom from 'react-dom';

class HelloReact extends Component {
   render() {
       return (
		<center>
          <h1 className='clickedshow'>Sonunda bir adim daha yakinim!</h1>
       	</center>
	   );
   }
}

class MainPage extends Component {
	constructor(props) {
		super(props);
    	this.state = {isToggleOn: true};
	}

	dashboard() {
		reactDom.render(
				<div>
					<MainPage/>
					<HelloReact/>
				</div>, 
				document.getElementById('root')
		)

	}
	
	render() {
		return(
			<div className="App">
	  			<Helmet>
	  				<style>{"body { background-color: #121212; }"}</style>
	  			</Helmet>	
	  
	  			<h1 className="goatheader">Welcome Goat!</h1>
	 			<center>
		  			<button className='goatdashboard' onClick={this.dashboard}>GoatToken Request</button> 
				</center>
			</div> 
		);	
	}
}

function App() {
	reactDom.render(<MainPage/>, document.getElementById('root'));
	
}

export default App;
