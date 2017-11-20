import React,{Component} from "react";

export default class GoComment extends Component{
	render(){
		return (
			<div className="gocomment">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="src/assets/images/left.png"/>
					</a>
					<h3>去评价</h3>						
					<a className="iconb" href="shopcar.html"></a>
				</header>
	
				<div className="contaniner fixed-cont">
					<section className="assess">
							<p>
								<img src="src/assets/images/detail-pp01.png"/>
								<textarea rows="5" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦" ></textarea>								
							</p>	
							<ul>
								<li>商品评价</li>
								<li className="assess-right">
									<img src="src/assets/images/detail-iocn01.png"/>
									<img src="src/assets/images/detail-iocn01.png"/>
									<img src="src/assets/images/detail-iocn01.png"/>
									<img src="src/assets/images/detail-iocn01.png"/>
									<img src="src/assets/images/detail-iocn01.png"/>
								</li>
							</ul>
					</section>
				</div>
				
				<footer className="assess-footer fixed-footer ">
					<ul>
						<li>
							<input type="checkbox" id="ass"/>
							<label htmlFor="ass">匿名评价</label>							
						</li>
						<input type="button" value="发表评论" />
					</ul>
				</footer>
			</div>
		)
	}
}
