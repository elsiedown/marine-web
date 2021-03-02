import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Coaching from './components/Coaching'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (


        <BrowserRouter>
          <section className="main-layout">
            <Nav />
            <section className="sections-layout">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/coaching" component={Coaching} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </section>
            <Footer />
          </section>
        </BrowserRouter>
  )
}

export default App
