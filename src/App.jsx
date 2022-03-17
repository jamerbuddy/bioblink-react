import './App.css';

function App() {
  return (
    <div>
      <div className="loader-bg">
        <div className="loader-track">
          <div className="loader-fill"></div>
        </div>
      </div>


      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
                <a href="index.html" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up"></i>
                    </div>
                    <span className="b-title">BioBlink</span>
                </a>
                <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div className="navbar-content scroll-div">
                <ul className="nav pcoded-inner-navbar">
                    <li className="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                        <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className="nav-item">
                        <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Historical data</span></a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>


      <header className="navbar pcoded-header navbar-expand-lg navbar-light">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
            <a href="index.html" className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">BioBlink</span>
               </a>
        </div>
        <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal"></i>
        </a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li><a href="javascript:" className="full-screen" onClick="javascript:toggleFullScreen()"><i className="feather icon-maximize"></i></a></li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="javascript:">Action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Another action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="main-search">
                        <div className="input-group">
                            <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                            <a href="javascript:" className="input-group-append search-close">
                                <i className="feather icon-x input-group-text"></i>
                            </a>
                            <span className="input-group-append search-btn btn btn-primary">
                                <i className="feather icon-search input-group-text"></i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li>
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                        <div className="dropdown-menu dropdown-menu-right notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Notifications</h6>
                                <div className="float-right">
                                    <a href="javascript:" className="m-r-10">mark as read</a>
                                    <a href="javascript:">clear all</a>
                                </div>
                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">NEW</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>New ticket Added</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="n-title">
                                    <p className="m-b-0">EARLIER</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>Prchace New Theme and make payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>currently login</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="noti-footer">
                                <a href="javascript:">show all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown drp-user">
                        <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon feather icon-settings"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                                <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                <span>John Doe</span>
                                <a href="auth-signin.html" className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"></i>
                                </a>
                            </div>
                            <ul className="pro-body">
                                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                <li><a href="javascript:" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
      </header>


      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
              <div className="pcoded-inner-content">
                  <div className="main-body">
                      <div className="page-wrapper">
                          <div className="row">
                              <div className="col-md-6 col-xl-3">
                                  <div className="card daily-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Battery life</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 id="battery" className="f-w-300 d-flex align-items-center m-b-0" style={{color: '#1de9b6'}}>0%</h3>
                                              </div>
                                          </div>
                                          <div className="progress m-t-30" style={{height: '7px'}}>
                                              <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '76%'}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-3">
                                  <div className="card daily-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Average blink duration</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 id="avg-blink-duration" className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>0ms</h3>
                                              </div>
                                          </div>
                                          <div className="progress m-t-30" style={{height: '7px'}}>
                                              <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6 col-xl-3">
                                  <div className="card Monthly-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Average time between blinks</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 id="avg-between-blinks" className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>0ms</h3>
                                              </div>
                                          </div>
                                          <div className="progress m-t-30" style={{height: '7px'}}>
                                              <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-12 col-xl-3">
                                  <div className="card yearly-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Session feedbacks</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 id="haptic-count" className="f-w-300 d-flex align-items-center  m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>0</h3>
                                              </div>
                                          </div>
                                          <div className="progress m-t-30" style={{height: '7px'}}>
                                              <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-xl-12">
                                  <div className="card">
                                      <div className="card-header">
                                          <h5>Real-time Blink Data</h5>
                                      </div>
                                      <div className="card-block">
                                          <div id="morris-area-chart" style={{height: '300px'}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="row">
                              <button type="button" className="btn btn-primary" title="btn btn-primary" id="connect-bluetooth">Connect bluetooth</button>
                              <label htmlFor="inputPassword2" className="sr-only">Input haptic interval...</label>
                              <input className="form-control" id="input-interval" placeholder="Input haptic interval..."/>
                              <button type="button" className="btn btn-primary" title="btn btn-primary" id="btn-save-interval">Save interval</button>
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

export default App;
