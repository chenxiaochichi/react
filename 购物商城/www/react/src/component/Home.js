import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';
import {connect} from "react-redux";

import Slider from "./Slider";

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			list : []
		}
		this.getData = this.getData.bind(this);
		this.getData();
	}
	componentDidMount(){
    	this.props.router.replace('/home');
  	}
	getData(){
		this.props.showLoading();
		//let url = "/data/home.json";
		let url = "http://localhost:3000/";
		fetch(url).then((res)=>{
			res.json().then((data)=>{
				//console.log(data);
				setTimeout(()=>{
					this.props.hideLoading();
					this.setState({
						list : data
					});
				},800)				
			})
		})
	}
	render(){
		return (
			<div className="home">
				<header className="page-header">
					<h3>商城</h3>
				</header>
	
				<div className="contaniner fixed-contb">
					<Slider/>
					
					<section className="shop">
						{
							this.state.list.map((item,index)=>{
								return (
									<div className="goods" key={item.id}>
										<h3>
											<a href="#">
												{item.title}
												<span><img src="src/assets/images/right.png"/></span>
											</a>
										</h3>
										<dl>
											<dd>
												<Link to={"/list/"+item.id}>
													<img src={item.src1}/>
													<b>{item.t1}</b>
												</Link>
											</dd>
											<dd>
												<Link to={"/list/"+item.id}>
													<img src={item.src2}/>
													<b>{item.t2}</b>
												</Link>
											</dd>
										</dl>
									</div>
								)
							})
						}						
					</section>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		bLoading : state.bLoading
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		showLoading : () => {
			dispatch({
				type:"SHOW_LOADING"
			})
		},
		hideLoading : () => {
			dispatch({
				type:"HIDE_LOADING"
			})
		},	    
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)