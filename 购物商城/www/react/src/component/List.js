import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';
import {connect} from "react-redux";

import "../assets/js/jaliswall.js";

let isMounted = false;

class List extends Component{
	constructor(props){
		super(props);
		this.state={
			list : []
		};
		this.getData = this.getData.bind(this);
		this.getData();
	}
	componentDidMount(){
		$('.wall').jaliswall({ item: '.pic' });
		isMounted = true;
	}
	componentWillUnmount(){
    	isMounted = false;
  	}
	getData(){
		this.props.showLoading();
		//let url = "/data/list.json";
		let url = "http://localhost:3000/list";
		fetch(url).then((res)=>{
			res.json().then((data)=>{
				//console.log(data);
				setTimeout(()=>{
					if(!isMounted){
						this.props.hideLoading();
					}else{
						this.props.hideLoading();
						this.setState({
							list : data
						});
					}
				},800)				
			})
		})
	}
	render(){
		return (
			<div className="list">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="/src/assets/images/left.png"/>
					</a>
					<h3>服装专区</h3>						
					<Link to="/shopcar" className="iconb">
						<img src="/src/assets/images/shopbar.png"/>
					</Link>
				</header>
	
				<div className="contaniner fixed-conta">
					<section className="list">
						<figure><img src="/src/assets/images/list-ban01.png"/></figure>
						<div className="search">
							<input type="search" placeholder="韩版卫衣" />
							<label><img src="/src/assets/images/list-search.png"/></label>
						</div>
						<nav>
							<ul>
								<li>
									<a href="#">
										<span>全部</span>
									</a>
								</li>
								<li className="list-active">
									<a href="#">
										<span>销量</span>
										<img src="/src/assets/images/up-red.png"/>
									</a>
								</li>
								<li>
									<a href="#">
										<span>价格</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>评价</span>
									</a>
								</li>
							</ul>
						</nav>
						<ul className="wall">
							{
								this.state.list.map((item,index)=>{
									return (
										<li className="pic" key={item.id}>
											<Link to={"/detail/"+item.id}>
												<img src={item.src}/>
												<p>{item.title}</p>
												<b>{item.price}</b><del>{item.del}</del>
											</Link>
										</li>
									)
								})
							}							
						</ul>
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
)(List)
