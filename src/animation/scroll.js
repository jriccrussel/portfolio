import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { TweenMax, Power4 } from "gsap"
// import LocomotiveScroll from "locomotive-scroll"

gsap.registerPlugin(ScrollTrigger)

export const initLocomotiveScroll = async () => {
  const select = e => document.querySelector(e)
  const selectAll = e => document.querySelectorAll(e)

  // Scroller
  const scrollContainer = select("[data-scroll-container]")

  const LocomotiveScroll = (await import("locomotive-scroll")).default

  const scroller = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    smartphone: {
        smooth: true
    }
  })

  scroller.on("scroll", ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
  })
  
  // Change background
  const updateBodyColor = color => {
    document.documentElement.style.setProperty("--bg-color", color)
  }  

  function initChangeBackground() {
  
    selectAll([".proj-apps-main .proj-item-main", ".tech-main", ".tiles--darker", ".about-main", ".content--feature"]).forEach(project => {
      let newColor = project.getAttribute("data-color")
  
      ScrollTrigger.create({
        scroller: scrollContainer,
        trigger: project,
        start: "top 50%",
        end: `+=${project.clientHeight}`,  
        onEnter: () => updateBodyColor(newColor),  
        onEnterBack: () => updateBodyColor(newColor)
      })
    })
  }

  // Change text color and background
  const initChangeTxt = () => {
  
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]")
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: scrollContainer,
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      })
    })
  }

  // Image parallax
  const initImageParallax = () => {
    selectAll(".prj-img").forEach(section => {
      const image = section.querySelector(".img-src")
  
      gsap.to(image, {
        scrollTrigger: {
          scroller: scrollContainer,
          trigger: section,
          scrub: true
        },
        top: "35%",
        ease: "none"
      })
    })
  }

  const tabParallax = () => {
    selectAll(".prj-img").forEach(section => {
      const image = section.querySelector(".img-two-src")
  
      gsap.to(image, {
        scrollTrigger: {
          scroller: scrollContainer,
          trigger: section,
          scrub: true
        },
        top: "15%",
        ease: "none"
      })
    })
  }

  // Cursor
  const initCursor = () => {
    let mouseCursor = document.querySelector(".cursor")
    let btn = document.querySelectorAll("a")

    window.addEventListener("mousemove", cursor)

    function cursor(e){
      gsap.to(mouseCursor, 0.4, {
        x: e.clientX,
        y: e.clientY
      })
    }

    btn.forEach(link => {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("scale-cursor")
        gsap.to(mouseCursor, 0.4, {
          scale: 2,
          cursor: "not-allowed"
        })
      })

      link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove("scale-cursor")
        gsap.to(mouseCursor, 0.4, {
          scale: 1
        })
      })
    })
  }

  // Loader
  const loader = select(".load-main")
  const loaderLogo = select(".load-badge")
  // const firstScrollNumber = select(".a-loader .loader-heading .heading-column:nth-child(2) .heading-row")
  // const secondScrollNumber = select(".a-loader .loader-heading .heading-column:nth-child(3) .heading-row")

  function initLoader() {    
    gsap.to(loader, {
      height: 0,
      display: "none",
      duration: 1,
      ease: Power4.easeInOut,
      delay: 2
    })

    gsap.to(loaderLogo, {
      height: 0,
      display: "none",
      duration: 1,
      ease: Power4.easeInOut,
      delay: 1.2
    })
  }

  function transitionEnter(el, done) {  
    TweenMax.to(loader, 1, {
      height: 0,
      display: "none",
      ease: Power4.easeInOut,
      delay: 2,
      onComplete: done
    })  
    // TweenMax.to(el, {
    //   opacity: 1
    // })
  }
  
  function transitionLeave(el, done) {
    TweenMax.to(loader, 1, {
      height: "100%",
      display: "block",
      ease: Power4.easeInOut,
      onComplete: done,
    })

    TweenMax.to(loaderLogo, 1, {
      height: "100%",
      display: "block",
      ease: Power4.easeInOut,
      onComplete: done,
    })
    // TweenMax.to(el, {
    //   opacity: 0
    // })
  }


  window.addEventListener("load", function() {
    initChangeBackground()

    initChangeTxt()

    initImageParallax()

    tabParallax()

    initCursor()

    setTimeout(() => {
      initLoader()
    }, 1000)

    ScrollTrigger.addEventListener("refresh", () => scroller.update())
    ScrollTrigger.refresh()
  })
}