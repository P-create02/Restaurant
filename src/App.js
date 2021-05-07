import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Submenu } from './components'
import { Home, Products, About, Contact, Gallery, Cart, Error, Checkout, } from './pages'

function App() {
  return (
    <Router>
          <Navbar />
          <Sidebar />
          <Submenu />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/gallery'>
              <Gallery />
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route exact path='/products'>
              <Products />
            </Route>

            <Route exact path='/cart'>
              <Cart />
            </Route>

            
            <Route exact path='/checkout'>
              <Checkout />
            </Route>

            <Route path='*'>
              <Error />
            </Route>
          </Switch>

          <Footer />
        </Router>
  );
}

export default App;
