
function MainContainer() {
  return (
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
  );
}

export default MainContainer;