import React from "react"
import Header from "./Component/Head/Header"
import Features from "./Component/Features/Features"
import Home from "./Component/Hero/Home"
import Portfolio from "./Component/Porfolio/Porfolio"
import Resume from "./Component/Resume/Resume"
import Testimonial from "./Component/Testimonial/Testimonial"
import Blog from "./Component/Blog/Blog"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer"
import "./App.css"

const App = () => {
  return (
    <App>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </App>
  )
}

export default App
