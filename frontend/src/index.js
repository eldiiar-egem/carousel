import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


// import React from 'react';
// import render from 'react-dom';
// import './index.css';
// import {BrowserRouter} from 'react-router-dom';
// import routes from './routes';
// import createHistory from 'history/createBrowserHistory'
//
// require('./styles/base.scss');
//
//
// render((
//     <BrowserRouter history={createHistory} routes={routes}/>
//   ),
//   document.getElementById('root')
// );
//
// // const Root = () => (
// //   <BrowserRouter>
// //     <div className="sans-serif">
// //       <Route path="/" component={App}/>
// //     </div>
// //   </BrowserRouter>
// // );
// // ReactDOM.render(<Root/>, document.getElementById('root'));
// // registerServiceWorker();
