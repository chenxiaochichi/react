import React,{Component} from "react";
import {Link,browserHistory} from 'react-router';

export default class Reg extends Component{
	constructor(props){
		super(props);
		this.state = {
			iptUserName : "",
      		iptPassword : "",
		};
		this.changeUserName = this.changeUserName.bind(this);
	    this.changePassword = this.changePassword.bind(this);
	    this.subRegRequest = this.subRegRequest.bind(this);
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
	subRegRequest(){
	    fetch('http://localhost:3000/reg?username='+this.state.iptUserName+'&password='+this.state.iptPassword,{
	      	credentials : 'include' //凭证
	    }).then((res)=>{
		    res.json().then((data)=>{
		        console.log(data);
		        if( data.error == 0 ){
		        	alert('注册成功');
		          	this.props.router.push('/login');
		        }else{
					alert("注册时库信息错误");
				}
		    })
	    })
	}
	render(){
		return (
			<div className="reg">
				<header className="top-header">
					<Link className="text texta" to="/home">取消</Link>
					<h3>注册</h3>
					<Link className="text" to="/login">登录</Link>
				</header>
							
				<div className="login">
					<form action="" method="post">						
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
						<input type="button" value="立即注册" onClick={this.subRegRequest}/>
					</form>
				</div>
			</div>
		)
	}
}
