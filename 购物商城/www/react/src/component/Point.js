import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class Point extends Component{
	render(){
		return (
			<div className="point">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
							<img src="src/assets/images/left.png"/>
						</a>
					<h3>我的积分</h3>						
					<Link className="iconb" to="/shopcar"></Link>
				</header>
	
				<div className="contaniner fixed-conta">
					<section className="integral">
						<h3>3600</h3>
						<dl>
							<dd>
								<p>购物返积分</p>
								<time>2015-12-04 14:53</time>
							</dd>
							<dt>+50积分</dt>
						</dl>
						<dl>
							<dd>
								<p>购物返积分</p>
								<time>2015-12-04 14:53</time>
							</dd>
							<dt>+50积分</dt>
						</dl>
						<dl>
							<dd>
								<p>购物返积分</p>
								<time>2015-12-04 14:53</time>
							</dd>
							<dt>+50积分</dt>
						</dl>
						<dl>
							<dd>
								<p>购物返积分</p>
								<time>2015-12-04 14:53</time>
							</dd>
							<dt>+50积分</dt>
						</dl>
						<dl>
							<dd>
								<p>购物返积分</p>
								<time>2015-12-04 14:53</time>
							</dd>
							<dt>+50积分</dt>
						</dl>
					</section>
				</div>
			</div>
		)
	}
}
