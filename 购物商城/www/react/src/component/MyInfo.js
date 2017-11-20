import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class MyInfo extends Component{
	render(){
		return (
			<div className="myinfo">
				<header className="top-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="src/assets/images/left.png"/>
					</a>
					<h3>我的资料</h3>
					<Link className="iconb" to="/shopcar"></Link>
				</header>
	
				<div className="contaniner">
					<ul className="self-data">
						<li>
							<a href="#">
								<p>头像</p>
								<span><img src="src/assets/images/right.png"/></span>					
								<figure><img src="src/assets/images/detail-tou.png"/></figure>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<p>昵称</p>
								<span><img src="src/assets/images/right.png"/></span>
								<small>弱小喵</small>								
							</a>
						</li>
						<li>
							<a href="#">
								<p>性别</p>
								<span><img src="src/assets/images/right.png"/></span>
								<select>
									<option>男</option>
									<option>女</option>
								</select>
								
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
