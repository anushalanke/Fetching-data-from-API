import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class Profile extends Component{
	
	render() {
		return(
				 
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">{this.props.userData.title}</h3>
    <h3 className="panel-title">{this.props.userData.director}</h3>
    <h3 className="panel-title">{this.props.userData.producer}</h3>
  </div>
  
</div>

			  )
	}

}



export default Profile