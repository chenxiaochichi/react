import React from "react";
import {Router,Route,Redirect,IndexRoute,hashHistory,browserHistory} from "react-router";

import App from "./component/App";
import Home from "./component/Home";
import Classify from "./component/Classify";
import List from "./component/List";
import Detail from "./component/Detail";
import ShopCar from "./component/ShopCar";
import User from "./component/User";
import Login from "./component/Login";
import Reg from "./component/Reg";
import Buy from "./component/Buy";
import Comment from "./component/Comment";
import GoComment from "./component/GoComment";
import MyAddress from "./component/MyAddress";
import GoAddress from "./component/GoAddress";
import MyCollect from "./component/MyCollect";
import MyInfo from "./component/MyInfo";
import MyShare from "./component/MyShare";
import Order from "./component/Order";
import Point from "./component/Point";
import Wait from "./component/Wait";
import Error from "./component/Error";



export const RouterConfig = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/home" component={Home}/>
			<Route path="/classify" component={Classify}/>
			<Route path="/list" component={List}>
				<Route path=":aid" component={List}/>
			</Route>
			<Route path="/detail" component={Detail}>
		        <Route path=":aid" component={Detail}/>
		    </Route>
			<Route path="/shopcar" component={ShopCar}/>
			<Route path="/user" component={User}/>
			<Route path="/login" component={Login}/>
      		<Route path="/reg" component={Reg}/>
      		<Route path="/buy" component={Buy}/>
			<Route path="/comment" component={Comment}/>
			<Route path="/gocomment" component={GoComment}/>
      		<Route path="/myAddress" component={MyAddress}/>
			<Route path="/goAddress" component={GoAddress}/>
      		<Route path="/myCollect" component={MyCollect}/>
			<Route path="/myInfo" component={MyInfo}/>
			<Route path="/myshare" component={MyShare}/>
      		<Route path="/order" component={Order}/>
      		<Route path="/point" component={Point}/>
      		<Route path="/wait" component={Wait}/>
			<Route path="*" component={Error}/>
		</Route>
	</Router>
);
