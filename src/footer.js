import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";

export default class EventComponent extends Component {
  render() {
    return (
      <div className="footer_text_size text-center">
        <div className="container pt-4 pb-4">
          <div className="d-flex justify-content-between flex-wrap ">
            <div className="footer_mb_text">
              <div className="d-flex footer_text_primary">
                <div className="over_write_pad">
                  <a href="infinite.com">Terms and Conditions</a>
                </div>
                <div className="over_write_pad">
                  <a href="infinite.com">Privacy Policy</a>
                </div>
                <div className="over_write_pad">
                  <a href="infinite.com">Contact</a>
                </div>
              </div>
            </div>
            <div className="footer_mb_text2">
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
