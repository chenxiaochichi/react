import React,{Component} from "react";

export default class MyShare extends Component{
	render(){
		return (
			<div className="share">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="src/assets/images/left.png"/>
					</a>
					<h3>我的分销</h3>						
					<a className="iconb" href="shopcar.html">
						<img src="src/assets/images/shopbar.png"/>
					</a>
				</header>
	
				<div className="contaniner fixed-conta">
					<div className="none">
						<h3>
							<img src="src/assets/images/shopnone.png"/>
						</h3>
						<p>
							<span>您还没有分销</span>
							<a href="#">去添加</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
