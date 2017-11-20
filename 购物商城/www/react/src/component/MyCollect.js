import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

import "../assets/js/jaliswall.js";

export default class MyCollect extends Component{
	componentDidMount(){
		$(window).load(function(){
    		$('.wall').jaliswall({ item: '.pic' });    		
    		$(".text-top").on("touchstart",function(){
    			$(".collectbar").fadeToggle(500);
    		});    		
    	})
	}
	mycheck(val){
		if($("#collect"+val).is(':checked')){
			$(".label"+val).addClass("collectd");
			$(".collectbox").fadeIn(300)
			$(".kong").fadeIn()
		}else{
			$(".label"+val).removeClass("collectd");
			$(".collectbox").fadeOut(300)
			$(".kong").fadeOut()
		}
	}
	render(){
		return (
			<div className="collect">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
							<img src="src/assets/images/left.png"/>
						</a>
					<h3>我的收藏</h3>						
						<a className="text-top">
							编辑
						</a>
				</header>
	
				<div className="contaniner fixed-conta">
					<div style={{marginTop:"3%"}}></div>
					<section className="list">
						<ul className="wall">
							<li className="pic">
								<Link to="/detail">
									<img src="src/assets/images/list-ph01.png"/>
									<p>韩版青少年休闲修身长袖紧身衬衫</p>
									<b>￥58</b><del>￥538</del>
									<div className="collectbar">
										<label htmlFor="collect1" className="label1"></label>
										<input type="checkbox" id="collect1" onClick={this.mycheck.bind(this,1)}/>
									</div>
								</Link>
							</li>
							<li className="pic">
								<Link to="/detail">
									<img src="src/assets/images/list-ph02.png"/>
									<p>韩版青少年休闲修身长袖紧身衬衫</p>
									<b>￥58</b><del>￥538</del>
									<div className="collectbar">
										<label htmlFor="collect2" className="label2"></label>
										<input type="checkbox" id="collect2" onClick={this.mycheck.bind(this,2)}/>
									</div>
								</Link>
							</li>
							<li className="pic">
								<Link to="/detail">
									<img src="src/assets/images/list-ph01.png"/>
									<p>韩版青少年休闲修身长袖紧身衬衫</p>
									<b>￥58</b><del>￥538</del>
									<div className="collectbar">
										<label className="label3" htmlFor="collect3"></label>
										<input type="checkbox" id="collect3" onClick={this.mycheck.bind(this,3)}/>
									</div>
								</Link>
							</li>
							<li className="pic">
								<Link to="/detail">
									<img src="src/assets/images/list-ph02.png"/>
									<p>韩版青少年休闲修身长袖紧身衬衫</p>
									<b>￥58</b><del>￥538</del>
									<div className="collectbar">
										<label className="label4" htmlFor="collect4"></label>
										<input type="checkbox" id="collect4" onClick={this.mycheck.bind(this,4)}/>
									</div>
								</Link>
							</li>
							
						</ul>
					</section>
					<div className="kong" style={{marginBottom:"16%"}}></div>
				</div>
	
				<footer className="collectbox fixed-footer">					
					<input type="button" value="确认删除" />
				</footer>
			</div>
		)
	}
}
