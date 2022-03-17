import Loader from './Loader'
import NavigationMenu from './NavigationMenu';
import Header from './Header'
import MainContainer from './MainContainer';

function App() {
  return (
    <div>
        <Loader/>
        <NavigationMenu/>
        <Header/>
        <MainContainer/>
    </div>
  );
}

export default App;
