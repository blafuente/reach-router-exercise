import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class BootstrapNavBar extends Component{
  render(){
    return(	
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid" class="navbar">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">A T L</a>
					</div>
					<div class="row" id="navBarRow">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home </Link></li>
							<li><Link to="/about">About </Link></li>
							<li><Link to="/Images">Images </Link></li>
							<li><Link to="/MayorMessage">Mayor's Message </Link></li>
							<li><Link to="/Atlanta">ATL Weather </Link></li>
						</ul>
					</div>
				</div>
			</nav>   
		)
  }
}

export default BootstrapNavBar