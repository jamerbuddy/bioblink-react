import PageWrapper from "./PageWrapper";
import React from 'react';


class SettingsPage extends React.Component {
  state = {
    refreshRate: this.props.settings.refreshRate,
    highPowerMode: this.props.settings.highPowerMode,
    blinkInterval: this.props.settings.blinkInterval,
  };

  onValueChange = (event) => {
    const val = event.target.value

    switch(val) {
      case "ON":
        this.setState({highPowerMode: true});
        break;
      case "OFF":
        this.setState({highPowerMode: false});
        break;
      case "60Hz":
        this.setState({refreshRate: 60});
        break;
      case "144Hz":
        this.setState({refreshRate: 144});
        break;
      default:
        const interval = (val == "") ? 0 : parseInt(val);
        this.setState({blinkInterval: interval});
    }
  }

  render() {
    return (
      <PageWrapper>
        <div class="card">
          <div class="card-header">
            <h5>Settings</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3"/>
              <div class="col-md-6">
                  <h5>Refresh rate</h5>
                  <h7>Changes the refresh rate of the real-time blink graphs. This is the rate at which the graph samples the state values on the glasses devices.</h7>
                  <hr/>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline1" name="customRadioInline1" value="60Hz" checked={this.state.refreshRate == 60} class="custom-control-input" onChange={this.onValueChange}/>
                      <label class="custom-control-label" for="customRadioInline1">60Hz</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline2" name="customRadioInline1" value="144Hz" checked={this.state.refreshRate == 144} class="custom-control-input" onChange={this.onValueChange}/>
                      <label class="custom-control-label" for="customRadioInline2">144Hz</label>
                  </div>
                  <h5 class="mt-5">Hi-power mode</h5>
                  <h7>By turning this on, you are switching on high power mode where you will receive raw ADC data instead of the comparator slope values. This will result in a graph that is more detailed (and uses more power).</h7>
                  <hr/>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline3" name="customRadioInline2" value="ON" checked={this.state.highPowerMode} class="custom-control-input" onChange={this.onValueChange}/>
                      <label class="custom-control-label" for="customRadioInline3">ON</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="customRadioInline4" name="customRadioInline2" value="OFF" checked={!this.state.highPowerMode} class="custom-control-input" onChange={this.onValueChange}/>
                      <label class="custom-control-label" for="customRadioInline4">OFF</label>
                  </div>
                  <h5 class="mt-5">Blink interval</h5>
                  <h7>This is the interval (ms) of the haptic feedback. If the user does not blink within this set time threshold, the haptics will notify.</h7>
                  <hr/>
                  <input class="mb-3 form-control" type="text" placeholder="Enter interval..." value={this.state.blinkInterval} onChange={this.onValueChange}/>
                  <button type="submit" class="btn btn-primary mt-5">Submit</button>
              </div>
              <div class="col-md-3"/>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default SettingsPage;