import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bundle from "./Bundle";

import Hello from "bundle-loader?lazy&name=home!pages/Hello";
import Page from "bundle-loader?lazy&name=page1!pages/Page";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo";

const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Hello)} />
        <Route path="/page" component={createComponent(Page)} />
        <Route path="/counter" component={createComponent(Counter)} />
        <Route path="/userinfo" component={createComponent(UserInfo)} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
