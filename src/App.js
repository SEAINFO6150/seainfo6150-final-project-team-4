import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom' //浏览器路由
import Index from './views/index';
import Good from './views/good'
import CarList from './views/carList'
import Details from './views/detail'
import About from './views/about'
import Contact from './views/contact' 

function App() {
  return (
    <div className="App">
      <div>
            <BrowserRouter>
            <Route path='/index' component={Index}/>

            <Route path='/buy' exact  component={Good}/>
            
            <Route path='/list' exact component={CarList}/>
            <Route path='/order' exact component={Details}/>
            <Route path='/about' exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/' component={Index}/>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
