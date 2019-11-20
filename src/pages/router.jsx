import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Home } from './home/home';
import { Flavors } from './flavors/flavors';
import { Flavor } from './flavor/flavor';
import { Contact } from './contact/contact';
import { Shop } from './shop/shop';
import { Header } from '../ui/header/header';
import { Footer } from '../ui/footer/footer';
import { NotFound } from './not-found/not-found';

const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => history.listen(() => window.scrollTo(0, 0)), [history]);
  return null;
});

export const Router = () => (
  <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/flavors" component={Flavors}/>
        <Route exact path="/flavors/:id" component={Flavor}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact paht="/shop" component={Shop}/>
        <Route path="*" component={NotFound}/ >
      </Switch>
    <Footer/>
  </BrowserRouter>
)
