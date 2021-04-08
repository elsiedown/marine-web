import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import ScrollToTop from 'react-router-scroll-top'

import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Coaching from './components/Coaching'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop'
// import ScrollIntoView from "./components/ScrollIntoView";



function App() {



  return (


    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <section className="main-layout">
        <Nav />
        <section className="sections-layout fly-in">
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
