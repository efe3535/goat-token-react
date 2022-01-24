import './App.css';
import { Helmet } from 'react-helmet';
import { Component } from 'react';
import reactDom from 'react-dom';
import emailjs from 'emailjs-com';
const mail = require('./mail.json');

class SendReqPage extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.sendMail = this.sendMail.bind(this);
		this.amount = '';
		this.reason =  '';
		this.name = '';
	}
	
	sendMail() {
		if(this.name,this.amount,this.reason!="")
		{	
			alert(`Name: ${this.name}\nAmount: ${this.amount}\nReason: ${this.reason}`);
			const sendEmail = () => {
				var templateParams = {
					from_name: `${this.name}`,
					to_name: "Coinbro",
					message: `Name: ${this.name}\nAmount: ${this.amount}\nReason: ${this.reason}`,
				}

    			emailjs.send(mail.serviceid, mail.templateid, templateParams , mail.userid)
      			.then((result) => {
          			console.log(result.text);
      			}, (error) => {
          			console.log(error.text);
      			});
  			};

			sendEmail();

		}
	}
	
	render() {
	  return (
		<center>
		   	<input type="text" onChange={event=>{this.name = event.target.value}} className="name" placeholder='Your name?'/>
		   	<br/>
		   	<input type="text" onChange={event=>{this.amount = event.target.value}} className="amount" placeholder='How much?'/>
		   	<br/>
		   	<input type="text" onChange={event=>{this.reason = event.target.value}} className="reason" placeholder='Reason?'/>
			<br/>
		  	<button className='submit' onClick={this.sendMail}>Send Request</button>
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
					<SendReqPage/>
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
