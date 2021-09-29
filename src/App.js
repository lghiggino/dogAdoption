import logo from './logo.svg';
import './App.css';
import Tick from './components/Tick';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       <Tick />
    //     </header>
    //   </div>
    // );
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navbar-ul">
                        <li className="navbar-li-1">
                            logo
                        </li>
                        <li className="navbar-li-5">
                            <div className="navbar-center-div">
                                <Link to="/">All Dogs</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </li>
                        <li className="navbar-li-1">
                            search
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/services">
                        <About />
                    </Route>
                    <Route path="/about">
                        <Users />
                    </Route>
                    <Route path="/contact">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
