import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class MyAddress extends Component{
	render(){
		return (
			<div className="address">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="src/assets/images/left.png"/>
					</a>
					<h3>地址管理</h3>						
					<Link className="text-top" to="/goaddress">
						添加
					</Link>
				</header>
	
				<div className="contaniner fixed-conta">
					<dl className="address">
						<a href="go-address.html">
							<dt>
								<p>弱小喵</p>
								<span>17756084251</span>
								<small>默认</small>
							</dt>
							<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806</dd>
						</a>
					</dl>
				</div>
			</div>
		)
	}
}
