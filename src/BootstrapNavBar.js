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
				<div class="row">
					{/* <ul className="nav navbar-nav"> */}
					<div class="col-2">
						<Link to="/">Home </Link>
					</div>
					<div class="col-2">
						<Link to="/about">About </Link> 
					</div>
					<div class="col-2">
						<Link to="/Images">Images </Link>
					</div>
					<div class="col-2">
						<Link to="/MayorMessage">Mayor's Message </Link>
					</div>
					<div class="col-2">
						<Link to="/Atlanta">ATL Weather </Link>
					</div>
					{/* </ul> */}
				</div>
		  </div>


		</nav>   
	)
  }
}

export default BootstrapNavBar