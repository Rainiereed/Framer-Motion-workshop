import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Animations from "./pages/Animations";
import Confirm from "./pages/Confirm";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Play from "./pages/Play";
import {
  removeNotebook,
  addNotebook,
  clearCache,
  getStoredNotebooks,
} from "./utils/StorageUtils";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const SidePanel = styled.div`
  width: 120px;
  border-left: 1px solid #373737;
  border-right: 1px solid #373737;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

function App() {
  const [itemsInCart, setItemsInCart] = useState(getStoredNotebooks().length);

  return (
    <div className="App">
      <Router>
        <Header itemsInCart={itemsInCart} />
        <Main>
          <SidePanel />
          <Content>
            <AnimatePresence>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/shop">
                  <Shop
                    addToCart={(notebook) => {
                      addNotebook(notebook);
                      setItemsInCart(itemsInCart + 1);
                    }}
                  />
                </Route>
                <Route path="/cart">
                  <Cart
                    clearCart={() => {
                      setItemsInCart(0);
                      clearCache();
                    }}
                    removeFromCart={(notebook) => {
                      setItemsInCart(itemsInCart - 1);
                      removeNotebook(notebook);
                    }}
                  />
                </Route>
                <Route path="/animations">
                  <Animations />
                </Route>
                <Route path="/confirm">
                  <Confirm />
                </Route>
                <Route path="/play">
                  <Play />
                </Route>
              </Switch>
            </AnimatePresence>
          </Content>
          <SidePanel />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
