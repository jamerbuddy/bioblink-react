import {Link} from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
                <Link to="/">
                    <a className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">BioBlink</span>
                    </a>
                </Link>
                <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div className="navbar-content scroll-div">
                <ul className="nav pcoded-inner-navbar">
                    <li className="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <Link to="/">
                        <li className="nav-item">
                            <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                        </li>
                    </Link>
                    <Link to="/historical">
                        <li className="nav-item">
                            <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Historical data</span></a>
                        </li>
                    </Link>
                    <Link to="/settings">
                        <li className="nav-item">
                            <a className="nav-link "><span className="pcoded-micon"><i className="feather icon-settings"></i></span><span className="pcoded-mtext">Settings</span></a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default NavigationMenu;