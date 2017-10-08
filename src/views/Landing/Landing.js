import React, { Component } from 'react';
import { Collapse, Modal, ModalHeader, ModalBody, ModalFooter, Popover, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      modal: false
    }
  }
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

    this.setState({
      info: doc
    });

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
        this.setState({
          modal: true
        });

    }); 
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-xs-12 hide_on_contact text-center">
          <h1>Automation Squared</h1>
            <h2 className="abel_font">The Software Prototype Lab</h2>  
            <h4 className="abel_font">We take your digital ideas<br/> to profit for you.</h4>
        </div>
        <div className="contact-card">
          <div className="card-group mb-0 col-md-auto">
            <div className="card p-4">
              <h4 className="card-title text-center">Enquire Now!</h4>
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
                    <Label for="textArea">Message</Label>
                    <Input type="textarea" ref="message" name="text" id="ContactMessage"  placeholder="Type your message here..."/>
                  </FormGroup>
                  <Button onClick={this.handleMessage}>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className='modal-info'>
          <div><ModalHeader toggle={this.toggleModal}>Automation Squared</ModalHeader>
          <ModalBody>
            <h5 className="modal-title">Thank you <span className="capitalize">{this.state.info.name}</span>,</h5><br/>
            We'll be in contact with you shortly
          </ModalBody>
          <ModalFooter>
            <Button color="primary" color="btn btn-info" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
          </div>        
        </Modal>
      </div>
    )
  }
}

export default Landing;