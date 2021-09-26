import React from "react";
import './App.css';

// Import components
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Pages/Home";
import Aikido from "./Components/Pages/Aikido";
import Aktuality from "./Components/Pages/Aktuality/Aktuality";
import Kalendar from "./Components/Pages/Kalendar";
import Nabor from "./Components/Pages/Nabor";
import Kontakty from "./Components/Pages/Kontakty";
import Treneri from "./Components/Pages/Treneri";
import Historie from "./Components/Pages/Historie";
import Galerie from "./Components/Pages/Galerie/Galerie";
import Odkazy from "./Components/Pages/Odkazy";
import Page_not_found from "./Components/Pages/Page_not_found";

import Detail_page from "./Components/Pages/Aktuality/Detail_page/Detail_page";
// import Galerie_detail from "./Components/Pages/Galerie/Galerie_detail";
// <Route exact path="/galerie/:rok"  component={Galerie_detail} />
import Galerie_2021 from "./Components/Pages/Galerie/Galerie_2021";
import Galerie_2020 from "./Components/Pages/Galerie/Galerie_2020";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="container">
        <Header />
        <Nav />
          <Switch>
            <Route exact path="/"              component={Home} />
            <Route exact path="/aikido"        component={Aikido} />
            <Route exact path="/aktuality"     component={Aktuality} />
            <Route exact path="/aktuality/:id" component={Detail_page} />
            <Route exact path="/kalendar"      component={Kalendar} />
            <Route exact path="/nabor"         component={Nabor} />
            <Route exact path="/kontakty"      component={Kontakty} />
            <Route exact path="/treneri"       component={Treneri} />
            <Route exact path="/historie"      component={Historie} />
            <Route exact path="/galerie"       component={Galerie} />
            <Route exact path="/galerie/2021"  component={Galerie_2021} />
            <Route exact path="/galerie/2020"  component={Galerie_2020} />
            <Route exact path="/odkazy"        component={Odkazy} />
            <Route exact path="*"              component={Page_not_found} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;