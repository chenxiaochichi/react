import React,{Component} from "react";

import "../assets/css/swiper.min.css";
import "../assets/js/swiper.min.js";

export default class Slider extends Component{
	componentDidMount(){
		new Swiper('.swiper-container',{
			loop: true,
			speed:1000,
			autoplay: 2000
		});
	}
	render(){
		return (
			<div className="slider">
				<figure className="ban swiper-container">
					<ul className="swiper-wrapper">
						<li className="swiper-slide">
							<a href="#">
								<img src="src/assets/images/index-ban01.png"/>
							</a>
						</li>
						<li className="swiper-slide">
							<a href="#">
								<img src="src/assets/images/index-ban02.png"/>
							</a>
						</li>
						<li className="swiper-slide">
							<a href="#">
								<img src="src/assets/images/index-ban03.png"/>
							</a>
						</li>
					</ul>
				</figure>
			</div>
		)
	}
}
