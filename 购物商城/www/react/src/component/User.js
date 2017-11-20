import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class User extends Component{
	render(){
		return (
			<div className="user">
				<header className="self-header">
					<figure><img src="src/assets/images/self-tou.png"/></figure>
					<dl>
						<dt>弱小喵</dt>
						<dd>
							<img src="src/assets/images/self-header.png"/>
							<span>5684</span>
							<span>炒饭大湿</span>
						</dd>
					</dl>
					<button>签到</button>
				</header>
	
				<div className="contaniner fixed-contb">
					<section className="self">
						<dl>
							<dt>
								<Link to="/order">
									<img src="src/assets/images/self-icon.png"/>
									<b>全部订单</b>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</dt>
							<dd>
									<ul>
										<li>
											<Link to="/wait">
												<img src="src/assets/images/order-icon01.png"/>
												<p>待发货</p>
											</Link>
										</li>
										<li>
											<Link to="/wait">
												<img src="src/assets/images/order-icon03.png"/>
												<p>待付款</p>
											</Link>
										</li>
										<li>
											<Link to="/wait">
												<img src="src/assets/images/order-icon02.png"/>
												<p>待收货</p>
											</Link>
										</li>
										<li>
											<Link to="/comment">
												<img src="src/assets/images/order-icon04.png"/>
												<p>待评价</p>
											</Link>
										</li>
									</ul>
							</dd>
						</dl>
						
						<ul className="self-icon">
							<li>
								<Link to="/myinfo">
									<img src="src/assets/images/self-icon01.png"/>
									<p>个人信息</p>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</li>
							<li>
								<Link to="/mycollect">
									<img src="src/assets/images/self-icon02.png"/>
									<p>我的收藏</p>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</li>
							<li>
								<Link to="/point">
									<img src="src/assets/images/self-icon03.png"/>
									<p>我的积分</p>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</li>
							<li>
								<Link to="/myaddress">
									<img src="src/assets/images/self-icon04.png"/>
									<p>地址管理</p>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</li>
						</ul>
						<ul className="self-icon">
							<li>
								<Link to="/myshare">
									<img src="src/assets/images/self-icon05.png"/>
									<p>我的分销</p>
									<span><img src="src/assets/images/right.png"/></span>
								</Link>
							</li>
							<li>
								<a href="javascript:;">
									<img src="src/assets/images/self-icon06.png"/>
									<p>邀请好友</p>
									<span><img src="src/assets/images/right.png"/></span>
								</a>
							</li>							
						</ul>
						<Link to="/login"><input type="button" value="退出" /></Link>						
					</section>										
				</div>
			</div>
		)
	}
}
