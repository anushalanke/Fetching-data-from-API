import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';



class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			userData: [],
			
		}
	}
 //Get user data from starwars 
 getUserData(){

 	$.ajax({
 		url: 'http://swapi.co/api/films/1',
 		dataType: 'json',
 		cache: false,
 		success: function(data){
 			this.setState({userData: data});
 			console.log(data);
 		}.bind(this),
 		error: function(xhr, status, err){
 			this.setState({userData: null});
 			alert(err);
 		}.bind(this)
 	});
 }
 

 componentDidMount(){
 	this.getUserData();
 }
	render() {
		return(
				<Profile userData = {this.state.userData} />
			  )
	}

}



export default App