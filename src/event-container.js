import React, { Component } from 'react';
import './App.css';
import Event1 from './assets/event1.png';
import Event2 from './assets/event2.png';
import Event3 from './assets/event3.png';
import avatar from './assets/avatar.png';
import EventRounded1 from './assets/event-rounded1.png';
import EventRounded2 from './assets/event-rounded2.png';
// mdb
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default class EventComponent extends Component {


  render() {
    return (
      <div><div className="container">
        <Paper className="pt-2">
          <Tabs
            indicatorColor="primary"
            textColor="primary">
            <Tab label="Timeline" />
            <Tab label="Calender" />
            <Tab label="Statistics" />
          </Tabs>
        </Paper>
      </div>
        <div className="container-wrapper-bg">
          <div className="container">
            {/* main cont */}


            <div className="row">
              <div className="col-md-3 mt-5">
                <div className="pl-4">
                  <div className="day">Wednesday</div>
                  <div className="date-year">October 16, <br />2019</div>
                </div>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="border_left pt-4 ml-3">
                    <div className="pt-3"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div>
                          <MDBIcon icon="comment-alt" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">COMMENTED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">9.43AM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                                <div className="inside_container_title mb-2">The Best Tropical Plants You Can Grow Indoors</div>
                                <div className="inside_container_text">&#8220;Gotta get some plants now.Thanks for this super help article. Love it&#8221;</div>
                              </div>
                              <div>
                              <img src={Event1} alt="event-img" className="ima_border_rad" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div>
                        <MDBIcon icon="check" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">FOLLOWED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">10.05AM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                              <img src={EventRounded1} alt="event-img" className="ima_border_rad mr-4" />
                              <span className="inside_container_title">Travel Channel</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>



                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div className="second">
                        <MDBIcon icon="bookmark" className="pr-3 ml-2" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">BOOKMARKED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">1.02PM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                                <div className="inside_container_title mb-2">Fresh wave of climate strikes takes place around the world</div>
                              </div>
                              <div>
                              <img src={Event2} alt="event-img" className="ima_border_rad" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================== */}







            <div className="row">
              <div className="col-md-3 mt-5">
                <div className="pl-4">
                  <div className="day">Tuesday</div>
                  <div className="date-year">October 15, <br />2019</div>
                </div>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="border_left pt-4 ml-3">
                    <div className="pt-3"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="mt-2 p-0 col-md-1">
                          <div>
                            <MDBIcon icon="check" />
                          </div>
                          <div className="border_left full_height ml-3"></div>
                        </div>
                        <div className="col-md-11 p-0">
                          <div className="d-flex justify-content-between mt-2 mb-2">
                            <div className="event_sub_title">FOLLOWED</div>
                            <div>
                              <MDBIcon far icon="clock" className="mr-1" />
                              <span className="time_number_format">10.05AM</span>
                            </div>
                          </div>
                          <div className="full_width">
                            <div className=" card_ctr">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="p-4">
                                  <img src={EventRounded2} alt="event-img" className="ima_border_rad mr-4" />
                                  <span className="inside_container_title">Cooking Channel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="mt-2 p-0 col-md-1">
                          <div className="second">
                            <MDBIcon icon="bookmark" className="pr-3 ml-2" />
                          </div>
                          <div className="border_left full_height ml-3"></div>
                        </div>
                        <div className="col-md-11 p-0">
                          <div className="d-flex justify-content-between mt-2 mb-2">
                            <div className="event_sub_title">BOOKMARKED</div>
                            <div>
                              <MDBIcon far icon="clock" className="mr-1" />
                              <span className="time_number_format">1.02PM</span>
                            </div>
                          </div>
                          <div className="full_width">
                            <div className=" card_ctr">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="p-4">
                                  <div className="inside_container_title mb-2">Travellers Cutting air travel as 'flight shame' spreads</div>
                                </div>
                                <div>
                                  <img src={Event3} alt="event-img" className="ima_border_rad" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


{/* ==================================================================== */}
<div className="row">
              <div className="col-md-3 mt-5">
                <div className="pl-4">
                  <div className="day">Wednesday</div>
                  <div className="date-year">October 16, <br />2019</div>
                </div>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="border_left pt-4 ml-3">
                    <div className="pt-3"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div>
                          <MDBIcon icon="comment-alt" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">COMMENTED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">9.43AM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                                <div className="inside_container_title mb-2">The Best Tropical Plants You Can Grow Indoors</div>
                                <div className="inside_container_text">&#8220;Gotta get some plants now.Thanks for this super help article. Love it&#8221;</div>
                              </div>
                              <div>
                              <img src={Event1} alt="event-img" className="ima_border_rad" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div>
                        <MDBIcon icon="check" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">FOLLOWED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">10.05AM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                              <img src={EventRounded1} alt="event-img" className="ima_border_rad mr-4" />
                              <span className="inside_container_title">Travel Channel</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>



                  <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex">
                      <div className="mt-2 p-0 col-md-1">
                        <div className="second">
                        <MDBIcon icon="bookmark" className="pr-3 ml-2" />
                        </div>
                        <div className="border_left full_height ml-3"></div>
                      </div>
                      <div className="col-md-11 p-0">
                        <div className="d-flex justify-content-between mt-2 mb-2">
                          <div className="event_sub_title">BOOKMARKED</div>
                          <div>
                            <MDBIcon far icon="clock" className="mr-1" />
                            <span className="time_number_format">1.02PM</span>
                          </div>
                        </div>
                        <div className="full_width">
                          <div className=" card_ctr">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="p-4">
                                <div className="inside_container_title mb-2">Fresh wave of climate strikes takes place around the world</div>
                              </div>
                              <div>
                              <img src={Event2} alt="event-img" className="ima_border_rad" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         {/* ================================================================================ */}


         <div className="row">
              <div className="col-md-3 mt-5">
                <div className="pl-4">
                  <div className="day">Tuesday</div>
                  <div className="date-year">October 15, <br />2019</div>
                </div>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="border_left pt-4 ml-3">
                    <div className="pt-3"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="mt-2 p-0 col-md-1">
                          <div>
                            <MDBIcon icon="check" />
                          </div>
                          <div className="border_left full_height ml-3"></div>
                        </div>
                        <div className="col-md-11 p-0">
                          <div className="d-flex justify-content-between mt-2 mb-2">
                            <div className="event_sub_title">FOLLOWED</div>
                            <div>
                              <MDBIcon far icon="clock" className="mr-1" />
                              <span className="time_number_format">10.05AM</span>
                            </div>
                          </div>
                          <div className="full_width">
                            <div className=" card_ctr">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="p-4">
                                  <img src={EventRounded2} alt="event-img" className="ima_border_rad mr-4" />
                                  <span className="inside_container_title">Cooking Channel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="mt-2 p-0 col-md-1">
                          <div className="second">
                            <MDBIcon icon="bookmark" className="pr-3 ml-2" />
                          </div>
                          <div className="border_left full_height ml-3"></div>
                        </div>
                        <div className="col-md-11 p-0">
                          <div className="d-flex justify-content-between mt-2 mb-2">
                            <div className="event_sub_title">BOOKMARKED</div>
                            <div>
                              <MDBIcon far icon="clock" className="mr-1" />
                              <span className="time_number_format">1.02PM</span>
                            </div>
                          </div>
                          <div className="full_width">
                            <div className=" card_ctr">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="p-4">
                                  <div className="inside_container_title mb-2">Travellers Cutting air travel as 'flight shame' spreads</div>
                                </div>
                                <div>
                                  <img src={Event3} alt="event-img" className="ima_border_rad" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
