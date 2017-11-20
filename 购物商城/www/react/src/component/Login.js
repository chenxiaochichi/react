import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			iptUserName : "",
      		iptPassword : "",
		};
		this.changeUserName = this.changeUserName.bind(this);
	    this.changePassword = this.changePassword.bind(this);
	    this.subLoginRequest = this.subLoginRequest.bind(this);
	}
	changeUserName(ev){
	    this.setState({
	      iptUserName : ev.target.value
	    })
	}
	changePassword(ev){
	    this.setState({
	      iptPassword : ev.target.value
	    })
	}
	subLoginRequest(){
	    fetch('http://localhost:3000/login?username='+this.state.iptUserName+'&password='+this.state.iptPassword,{
	      	credentials : 'include' //凭证
	    }).then((res)=>{
		    res.json().then((data)=>{
		        console.log(data);
		        if( data.error == 0 ){
		        	alert('登录成功');
		          	this.props.router.push('/user');
		        }else if( data.msg == "用户名与密码不符" ){
					alert("用户名与密码不符");
				}else{
					alert("用户名不存在");
				}
		    })
	    })
	}
	render(){
		return (
			<div className="login">
				<header className="top-header">
					<Link className="text texta" to="/home">取消</Link>
					<h3>登录</h3>
					<Link to="/reg" className="text">注册</Link>
				</header>
	
				<div className="login">
					<form>
						<ul>
							<li>
								<img src="src/assets/images/login.png"/>
								<label>账号</label>
								<input type="text" placeholder="请输入账号" value={this.state.iptUserName} onChange={this.changeUserName}/>
							</li>
							<li>
								<img src="src/assets/images/password.png"/>
								<label>密码</label>
								<input type="password" placeholder="请输入密码" value={this.state.iptPassword} onChange={this.changePassword}/>
							</li>
						</ul>
						<input type="button" value="登录" onClick={this.subLoginRequest}/>
					</form>
				</div>
			</div>
		)
	}
}
