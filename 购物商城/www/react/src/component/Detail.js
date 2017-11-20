import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';
import {connect} from 'react-redux';

import "../assets/css/swiper.min.css";
import "../assets/js/swiper.min.js";

class Detail extends Component{
	constructor(props){
		super(props);
		this.state = {
			list : []
		}
		this.getData = this.getData.bind(this);
		this.swiper = this.swiper.bind(this);
		this.detailScroll = this.detailScroll.bind(this);		
	}
	componentDidMount(){
		this.getData();
		$(window).scroll(this.detailScroll);
	}
	componentWillUnmount(){//组件卸载后要把window的scroll事件解绑
		$(window).off("scroll",this.detailScroll);
	}
	detailScroll(){
		if($(".detail-header").offset().top > 50){
	        $(".detail-header").addClass("change");
		}else{
		    $(".detail-header").removeClass("change");
		}
	}
	swiper(){
		new Swiper('.swiper-container',{
			loop: true,
			speed:1000,
			autoplay: 2000,
			pagination: '.swiper-pagination'
		});
	}
	getData(){
		let url = "/data/detail.json";
		fetch(url).then((res)=>{
			res.json().then((data)=>{
				//console.log(data);
				this.setState({
					list : data[this.props.params.aid-1]
				});	
				this.swiper();//swiper里的图片是动态加载进来的，要在资源加载完成后再调用swiper函数
			})
		})
	}
	render(){
		let list = this.state.list;
		let {addItem} = this.props;
		return (
			<div className="detail">
				<header className="detail-header fixed-header">
					<a href="javascript:history.go(-1)"><img src="/src/assets/images/detail-left.png"/></a>					
					<Link to="/shopcar" className="right">
						<img src="/src/assets/images/shopbar.png"/>
					</Link>
				</header>
		
				<div className="contaniner fixed-contb">
					<section className="detail">
						<figure className="swiper-container">
							<ul className="swiper-wrapper">
								<li className="swiper-slide">
									<a href="#">
										<img src={list.src1}/>
									</a>
								</li>
								<li className="swiper-slide">
									<a href="#">
										<img src={list.src2}/>
									</a>
								</li>
								<li className="swiper-slide">
									<a href="#">
										<img src={list.src3}/>
									</a>
								</li>
								<li className="swiper-slide">
									<a href="#">
										<img src={list.src4}/>
									</a>
								</li>
							</ul>
							<div className="swiper-pagination">
							</div>
						</figure>
						<dl className="jiage">
							<dt>
								<h3>{list.title}</h3>
								<div className="collect">
									<img src="/src/assets/images/detail-heart-hei.png"/>
									<p>收藏</p>
								</div>
							</dt>
							<dd>
								<b>{list.price}</b>
								<del>{list.del}</del>
								<input type="button" value="￥10.00" readOnly />
								<small>+356积分</small>
							</dd>
						</dl>
						
						<div className="chose">
							<ul>
								<h3>颜色</h3>
								<li>
									黑色
								</li>
								<li className="chose-active">
									粉色
								</li>
								<li>
									灰色
								</li>
								<li>
									红色
								</li>
							</ul>
							<ul>
								<h3>尺寸</h3>
								<li>
									L
								</li>
								<li className="chose-active">
									XL
								</li>
								<li>
									XXL
								</li>
							</ul>
						</div>
						
						<a href="#" className="seven">
							<b>7</b>天无理由退换货
						</a>
						
						<ul className="same">
							<a href="#">
								<span>
									同类推荐
								</span>
								<li className="one">
									<img src="/src/assets/images/detail-pp01.png"/>
									<p>￥188.00</p>
								</li>
								<li>
									<img src="/src/assets/images/detail-pp02.png"/>
									<p>￥188.00</p>
								</li>
								<li>
									<img src="/src/assets/images/detail-pp03.png"/>
									<p>￥188.00</p>
								</li>
								<li>
									<img src="/src/assets/images/detail-pp04.png"/>
									<p>￥188.00</p>
								</li>
							</a>
						</ul>
						
						<article className="detail-article">
							<nav>
								<ul>
									<li>商品详情</li>
									<li className="article-active">评价</li>
								</ul>
							</nav>
							<section className="talkbox">
								<ul className="talk">
									<li>
										<figure><img src="/src/assets/images/detail-tou.png"/></figure>
										<dl>
											<dt>
												<p>弱小喵</p>
												<time>2017.10.17</time>
												<div className="star">
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
												</div>
											</dt>
											<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
											<small>颜色：豹纹凯特</small>
										</dl>
									</li>
									<li>
										<figure><img src="/src/assets/images/detail-tou.png"/></figure>
										<dl>
											<dt>
												<p>弱小喵</p>
												<time>2017.9.27</time>
												<div className="star">
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
												</div>
											</dt>
											<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
											<small>颜色：豹纹凯特</small>
											<div className="picbox">
												<img src="/src/assets/images/detail-pp01.png"/>
												<img src="/src/assets/images/detail-pp02.png"/>
												<img src="/src/assets/images/detail-pp03.png"/>
												<img src="/src/assets/images/detail-pp04.png"/>
											</div>
										</dl>
									</li>
									<li>
										<figure><img src="/src/assets/images/detail-tou.png"/></figure>
										<dl>
											<dt>
												<p>弱小喵</p>
												<time>2017.8.7</time>
												<div className="star">
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
												</div>
											</dt>
											<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
											<small>颜色：豹纹凯特</small>
										</dl>
									</li>
									<li>
										<figure><img src="/src/assets/images/detail-tou.png"/></figure>
										<dl>
											<dt>
												<p>弱小喵</p>
												<time>2017.8.16</time>
												<div className="star">
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn01.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
													<span><img src="/src/assets/images/detail-iocn001.png"/></span>
												</div>
											</dt>
											<dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
											<small>颜色：豹纹凯特</small>
											<div className="picbox">
												<img src="/src/assets/images/detail-pp01.png"/>
												<img src="/src/assets/images/detail-pp02.png"/>
												<img src="/src/assets/images/detail-pp03.png"/>
												<img src="/src/assets/images/detail-pp04.png"/>
											</div>
										</dl>
									</li>
								</ul>
							</section>							
						</article>
					</section>
				</div>
				<footer className="detail-footer fixed-footer">
					<Link to="/shopcar" className="go-car">
						<input type="button" value="加入购物车" />
					</Link>
					<Link to="/buy" className="buy">
						立即购买
					</Link>
				</footer>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem : (item) => {
			dispatch({
				type : "ADD_ITEM",
				payload : item
			});
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail)