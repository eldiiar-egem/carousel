import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import Image from "./views/image";
import Carousels from "./views/carousel";

const App = () => (
  <div>
    <Header/>
    <Main/>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/carousel' component={List}/>
      <Route path='/contributors' component={Contributors}/>
    </Switch>
  </main>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/carousel'>Carousel</Link></li>
        <li><Link to='/contributors'>Contributors</Link></li>
      </ul>
    </nav>
  </header>
);


const List = () => (
  <div>
    <h1>Carousels page!</h1>
    <Switch>
      <Route exact path='/carousel' component={Carousels}/>
      <Route path='/carousel/:number' component={Image}/>
    </Switch>
  </div>
);


const Contributors = () => (
  <div>
    <ul>
      <li>Eldiiar</li>
    </ul>
  </div>
);


const Home = () => (
  <div>
    <h1>Dear home</h1>
  </div>
);

export default App