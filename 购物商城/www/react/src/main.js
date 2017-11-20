import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";

//状态管理
import {createStore} from "redux";
import reducer from "./store/reducer";
import state from "./store/state";
const store = createStore(reducer,state);

import {RouterConfig} from "./RouterConfig";

ReactDom.render(
	<Provider store={store}>
		<RouterConfig/>
	</Provider>,	
	document.querySelector("#app")
);

