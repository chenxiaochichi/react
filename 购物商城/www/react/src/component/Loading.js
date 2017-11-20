import React,{Component} from "react";

import "../assets/css/loading.css";

export default class Loading extends Component{
	render(){
		return (
			<div className="spinner">
			  	<div className="double-bounce1"></div>
			  	<div className="double-bounce2"></div>
			</div>
		)
	}
}
