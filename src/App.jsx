import { Route, Switch } from 'react-router';
import './App.css';

// Components
import Login from './pages/login/login';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Massages from './pages/Massages/Massages';
import More from './pages/More/More';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Search from './pages/Search/Search';
import User from './pages/User/User';


// Routes
import Public from './Routes/Public';
import Private from './Routes/Private';
function App() {
  return (
    <div className="app">
        <Header></Header>
        <Switch >
          <Private path="/" component={Home} exact={true}></Private>
          <Public path="/login" component={Login} ></Public>
          <Private path="/about" component={About} ></Private>
          <Private path="/bookmarks" component={Bookmarks} ></Private>
          <Private path="/massages" component={Massages} ></Private>
          <Private path="/more" component={More} ></Private>
          <Private path="/profile" component={Profile} ></Private>
          <Private path="/contact" component={Contact} ></Private>
          <Private path="/user" component={User} ></Private>
          <Route path="*">Error</Route>
        </Switch>
        <Search></Search>
    </div>
  );
}

export default App;
