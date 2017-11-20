import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';
import {connect} from "react-redux";

class ShopCar extends Component{
	componentDidMount(){
		$(".shopcar-checkbox label").on('touchstart',function(){
			if($(this).hasClass('shopcar-checkd')){
				$(".shopcar-checkbox label").removeClass("shopcar-checkd")
			}else{
				$(".shopcar-checkbox label").addClass("shopcar-checkd")
			}
		})
	}
	render(){
		let {buyCar,removeItem,clearBuyCar} = this.props;
		return (
			<div className="shopcar">
				<header className="page-header">
					<h3>购物车</h3>
				</header>
	
				<div className="contaniner fixed-contb">
					<section className="shopcar">
						<div className="shopcar-checkbox">
							<label htmlFor="shopcar"></label>
							<input type="checkbox" id="shopcar"/>
						</div>
						<figure><img src="src/assets/images/shopcar-ph01.png"/></figure>
						<dl>
							<dt>超级大品牌服装，现在买只要998</dt>
							<dd>颜色：经典绮丽款</dd>
							<dd>尺寸：L</dd>
							<div className="add">
								<span>-</span>
								<input type="text" defaultValue="1" />
								<span>+</span>
							</div>
							<h3>￥108.90</h3>
							<small><img src="src/assets/images/shopcar-icon01.png"/></small>
						</dl>
					</section>
					<div style={{marginBottom:"16%"}}></div>
				</div>
				
				<footer className="page-footer fixed-footer" style={{marginBottom:"73px"}}>
					<div className="shop-go">
						<b>合计：￥108.90</b>
						<span><Link to="/buy">去结算</Link></span>
					</div>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		buyCar : state.buyCar
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeItem : (item) => {
			dispatch({
				type : "REMOVE_ITEM",
				payload : item
			});
		},
		clearBuyCar : () => {
			dispatch({
				type : "REMOVE_ALL"
			});
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopCar)


