import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.js";
import About from "./About/About.jsx";
import UserLogin from "./User/UserLogin.jsx";
import UserRegister from "./User/UserRegister.jsx";
import Category from "./Car/Category.jsx";
import Detail from "./Car/Detail.jsx";
import data from "./data/data.json";
import Error from "./Error/Error.jsx";
import Reserve from"./Reserve/Reserve.jsx";
import Cate from"./Cate/Cate.jsx";
import './App.css';

const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
  
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to="/cate">Category</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
            
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <section>
        <div className = "logo">
                <h1 className={"h1"}>NEU-car </h1>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cate" exact component={Cate}/>
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/register" exact component={UserRegister} />
          <Route path="/reserve" exact component={Reserve} />
          <Route
            path="/car/:category"
            exact
            render={({ match }) => (
              <Category
                data = {data}
                category = {match.params.category}/>
            )}
          />
          <Route
            path="/car/:category/:index"
            exact
            render={({ match }) => (
              <Detail
                data = {data}
                category = {match.params.category}
                index = {match.params.index}/>
            )}
          />

            )
          }
          />
          <Route component={Error} />
        </Switch>
      </section>
      
      <footer></footer>
    </Router>
  );
}

export default App;