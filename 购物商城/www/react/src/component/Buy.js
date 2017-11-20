import React,{Component} from "react";

export default class Buy extends Component{
	render(){
		return (
			<div className="buy">
				<header className="top-header fixed-header">
					<a className="icona" href="javascript:history.go(-1)">
						<img src="src/assets/images/left.png"/>
					</a>
					<h3>去结算</h3>
					<a className="iconb" href="shopcar.html"></a>
				</header>
	
				<div className="contaniner fixed-cont">
					<section className="to-buy">
						<header>
							<div className="now">
								<span><img src="src/assets/images/map-icon.png"/></span>
									<dl>
										<dt>
											<b>弱小喵</b>
											<strong>17756084251</strong>
										</dt>
										<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
										<p>其他地址</p>
									</dl>
							</div>							
							<div className="to-now">
								<div className="tonow">
										<label htmlFor="tonow"></label>
										<input type="checkbox" id="tonow"/>
								</div>
								<dl>
										<dt>
											<b>弱小喵</b>
											<strong>17756084251</strong>
										</dt>
										<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
								</dl>
								<h3><a href="go-address.html"><img src="src/assets/images/write.png"/></a></h3>
							</div>
						</header>
						<div className="buy-list">
							<ul>
								<a href="detail.html">
									<figure>
										<img src="src/assets/images/detail-pp01.png"/>
									</figure>
									<li>
										<h3>超级大品牌服装，现在够买只要998</h3>
										<span>
											颜色：经典绮丽款
											<br />
											尺寸：M
										</span>
										<b>￥32.00</b>
										<small>×3</small>
									</li>
								</a>
							</ul>
							<dl>
								<dd>
									<span>运费</span>
									<small>包邮</small>
								</dd>
								<dd>
									<span>商品总额</span>
									<small>￥98.00</small>
								</dd>
								<dt>
									<textarea rows="4" placeholder="给卖家留言（50字以内）"></textarea>
								</dt>
							</dl>
						</div>						
					</section>
				</div>
				
				<footer className="buy-footer fixed-footer">
						<p> 
							<small>总金额</small>
							<b>￥98.00</b>
						</p>							
						<input type="button" value="去付款"/>
				</footer>
			</div>
		)
	}
}
