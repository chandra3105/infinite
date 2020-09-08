import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

export default class EventComponent extends Component {
  render() {
    return (
      <div className="">
        <div className="container pt-4 pb-4">
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex footer_text_primary">
                <div className="pr-3 mr-1">
                  <a href="#">Terms and Conditions</a>
                </div>
                <div className="pr-3 mr-1">
                  <a href="#">Privacy Policy</a>
                </div>
                <div className="pr-3 mr-1">
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <MDBIcon fab icon="facebook" className="mr-3" />
                  <MDBIcon fab icon="twitter" className="mr-3" />
                  <MDBIcon fab icon="instagram" className="mr-3" />
                </div>
                <div>
                  <span className="copy_right_text">&#169; 2019 All rights reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
