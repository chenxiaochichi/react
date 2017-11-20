import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class FootBar extends Component{
	render(){
		return (
			<div className="footbar">
				<footer className="page-footer fixed-footer">
					<ul>
						<li>
							<Link to="/home" activeClassName="active">
								<i className="iconfont">&#xe6b8;</i>
								<p>首页</p>
							</Link>
						</li>
						<li>
							<Link to="/classify" activeClassName="active">
								<i className="iconfont">&#xe682;</i>
								<p>分类</p>
							</Link>
						</li>
						<li>
							<Link to="/shopcar" activeClassName="active">
								<i className="iconfont">&#xe6af;</i>
								<p>购物车</p>
							</Link>
						</li>
						<li>
							<Link to="/user" activeClassName="active">
								<i className="iconfont">&#xe62e;</i>
								<p>个人中心</p>
							</Link>
						</li>
					</ul>
				</footer>
			</div>
		)
	}
}
