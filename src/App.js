import React from 'react';
import './App.css';
import EventComponent from './event-container';
import Footer from './footer.js';
import logo from './assets/Logo.png';
import avatar from './assets/avatar.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
function App() {
  return (
    <div >
      <div className="header_color">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top pt-2 pb-2">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="logo-img" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="basicExampleNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MDBIcon icon="grip-vertical" className="pr-3" />
                    CHANNELS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MDBIcon icon="bookmark" className="pr-3 ml-2" />
                    BOOKMARKS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MDBIcon icon="chart-pie" className="pr-3 ml-2" />
                    OVERVIEW
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MDBIcon icon="puzzle-piece" className="pr-3 ml-2" />
                    WIDGETS
                  </a>
                </li>
              </ul>
              <form className="mr-2">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </form>
              <span className="mr-2">
                <Avatar alt="Remy Sharp" src={avatar} />
              </span>
              <span className="user-name">Lea Schneider</span>
              <div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <EventComponent />
      <Footer />
    </div>
  );
}
export default App;
