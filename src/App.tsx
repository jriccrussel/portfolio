import React, { useContext, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppContext } from './context/context'
import { initLocomotiveScroll } from './animation/scroll'
import { About } from './components/sections/about'
import { TechTools } from './components/sections/tech'
import { DesignTools } from './components/sections/design'
import { Projects } from './components/sections/projects'
import { HeroTri } from './components/hero/heroTri'
import { Breakout } from './components/sections/breakout'
import { Cursor } from './components/elements/cursor'
import { Loader } from './components/loader/loader'
import { Footer } from './components/footer/footer'

function App() {
  const context = useContext(AppContext)
  const { states }:any = context

  useEffect(() => {
    // console.log(states)
    initLocomotiveScroll()
  }, [])
  

  return (
    <>
      <div className="body-container">
        <Loader />
        <main className="main-container" data-scroll-container>
          <div className="relative main-wrapper">
            <HeroTri />
            <About />
            <Breakout />
            <TechTools />
            <DesignTools />
            <Projects />
            <Footer />
          </div>        
        </main>
      </div>
    </>
  )
}

export default App
