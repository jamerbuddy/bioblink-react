import Loader from './Loader'
import NavigationMenu from './NavigationMenu';
import Header from './Header'
import {Outlet} from 'react-router-dom';

function Root() {
  return (
    <div>
        <Loader/>
        <NavigationMenu/>
        <Header/>
        <Outlet/>
    </div>
  );
}

export default Root;

