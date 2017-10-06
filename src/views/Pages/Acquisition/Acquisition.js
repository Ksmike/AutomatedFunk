import React, { Component } from 'react';
import { Tooltip, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import Navigation from '../../../components/Nav/';


class Acquisition extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('BIGS: ');
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block text-center">
                    <h1>Acquisition</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acquisition;


