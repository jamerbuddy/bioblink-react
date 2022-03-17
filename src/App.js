import React from 'react';
import DashboardPage from './DashboardPage';
import SettingsPage from './SettingsPage'
import HistoricalPage from './HistoricalPage'
import Root from './Root'
import {Routes, Route} from 'react-router-dom';

class App extends React.Component {
    state = {
       settings: {
        blinkInterval: 4000,
        refreshRate: 60,
        highPowerMode: false,
       }
    }

    updateSettings = (settings) => {
        this.setState({settings: settings});
    }

    render() {
        return (
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage settings={this.state.settings}/>} />
              <Route path="/historical" element={<HistoricalPage />} />
            </Route>
          </Routes>
        );
    }
}

export default App;
