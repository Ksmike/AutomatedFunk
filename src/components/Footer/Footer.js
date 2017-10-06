import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
     	<div className="container text-center">
          <div className="row">                   
          	<div className="col-md-4 col-xs-12">
		       <div className="col-xs-12 footer_div">
		       	<p>Ⓒ 2017 Automation Squared Ltd<br/>All Rights Reserved</p>        
		       </div>
          	</div>
		      <div className="col-md-4 col-xs-12">
		        <div className="col-xs-12 footer_div">
		        	<p>Company Number : 06249085<br/>VAT Number : GB 995 4530 77</p>          
		        </div>
		      </div>
		      <div className="col-md-4 col-xs-12">
		        <div className="col-xs-12 footer_div">
		        	<p>Unit 7, Newhouse Farm Business Centre,<br/>Faygate, West Sussex, RH12 4RU, UK</p>          
		        </div>
		      </div>
     	  </div>
      	</div>
      </footer>
    )
  }
}

export default Footer;
