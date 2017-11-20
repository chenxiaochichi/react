import React,{Component} from "react";
import {connect} from "react-redux";

import FootBar from "./FootBar";
import Loading from "./Loading";

const App = (props) => {
	let path = props.router.location.pathname;
	let {bFoot,bLoading,showFoot,hideFoot,showLoading,hideLoading} = props;
	if( /home|classify|shopcar|user/.test(path) ){
		setTimeout(showFoot,0);
	}else{
		setTimeout(hideFoot,0);
	}
	
	return (			
		<div className="app">
			{bLoading?<Loading/>:null}
			{props.children}				
			{bFoot?<FootBar/>:null}
		</div>
	)
}

//获取store
const mapStateToProps = (state) => {
	return {
		bFoot : state.bFoot,
		bLoading : state.bLoading
	}
};
//转发actins
const mapDispatchToProps = (dispatch) => {
	return {
		showFoot : () => {
			dispatch({
				type:"SHOW_FOOT"
			})
		},
		hideFoot : () => {
			dispatch({
				type:"HIDE_FOOT"
			})
		},
		showLoading : () => {
			dispatch({
				type:"SHOW_LOADING"
			})
		},
		hideLoading : () => {
			dispatch({
				type:"HIDE_LOADING"
			})
		},	    
	}
}

//容器组件 ->链接-> counter组件
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
