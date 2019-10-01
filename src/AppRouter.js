import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Kontak from "./Page/Kontak"
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";

const AppRouter = () => {
  return(
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/kontak" component={Kontak} />
      <Route path="/menu_makanan" component={MenuMakanan} />
      <Route path="/menu_minuman" component={MenuMinuman} />
    </div>
  </Router>
)
};

export default AppRouter;
