import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Landing extends Component {
  handleEnter = (e) => {
    if (e.which === 13) {
      this.login();
    }
  }
  handleMessage = () => {
    let doc = {
      name: document.getElementById('ContactName').value,
      email: document.getElementById('ContactEmail').value,
      message: document.getElementById('ContactMessage').value
    };

    console.log('info: ', doc);
    return fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('ContactName').value,
        email: document.getElementById('ContactEmail').value,
        message: document.getElementById('ContactMessage').value
      })}).then(res => res.json())
      .then(r => {
        console.log(r);
    }); 
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card-group mb-0">
          <div className="card p-4">
            <h4 className="card-title">Landing</h4>
            <div className="card-block">
              <Form id="ContactForm">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input name="name" ref="name" type="text" id="ContactName" placeholder="Enter Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" ref="email" name="email" id="ContactEmail" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                  <Label for="textArea">Text Area</Label>
                  <Input type="textarea" ref="message" name="text" id="ContactMessage"  placeholder="Type your message here..."/>
                </FormGroup>
                <Button onClick={this.handleMessage}>Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;