import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Home } from './home/home';
import { Flavors } from './flavors/flavors';
import { Flavor } from './flavor/flavor';
import { Contact } from './contact/contact';
import { Checkout } from './checkout/checkout';
import { Result } from './result/result';
import { Shop } from './shop/shop';
import { Header } from '../ui/header/header';
import { Footer } from '../ui/footer/footer';
import { NotFound } from './not-found/not-found';

const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => history.listen(({ state }) => {
    if (state == null || state.scrollToTop !== false) {
      window.scrollTo(0, 0)
    }
  }), [history]);
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
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/checkout/:id" component={Checkout}/>
        <Route exact path="/result" component={Result}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    <Footer/>
  </BrowserRouter>
)
