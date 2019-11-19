import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import online_data from "./data/onlineshop.json";
import Home from "./Home/Home.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Header from "./Header/Header.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Error from "./Error/Error.jsx";
import OnlineShop from "./OnlineShop/OnlineShop.jsx";

const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
         <Route
          path="/store"
          exact
          render={() => <OnlineShop online_data={Object.values(online_data)} />}
        />
          <Route path="/ContactUs" exact component={ContactUs} />
        <Route component={Error} />

      </Switch>
    </Router>
  );
}

export default App;
