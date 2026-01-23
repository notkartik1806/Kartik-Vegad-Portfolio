class InteractiveGrid {
  constructor() {
    this.canvas = document.getElementById("gridCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.gridPoints = []
    this.mousePos = { x: 0, y: 0 }
    this.animationFrame = null

    this.init()
  }

  init() {
    this.resizeCanvas()
    this.setupEventListeners()
    this.animate()
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.initializeGrid()
  }

  initializeGrid() {
    const gridSize = 50
    this.gridPoints = []

    for (let x = 0; x <= this.canvas.width + gridSize; x += gridSize) {
      for (let y = 0; y <= this.canvas.height + gridSize; y += gridSize) {
        this.gridPoints.push({
          x: x,
          y: y,
          originalX: x,
          originalY: y,
        })
      }
    }
  }

  setupEventListeners() {
    window.addEventListener("resize", () => this.resizeCanvas())
    window.addEventListener("mousemove", (e) => {
      this.mousePos.x = e.clientX
      this.mousePos.y = e.clientY
    })
  }

  updateGridPoints() {
    const wobbleRadius = 100
    const wobbleStrength = 15

    this.gridPoints.forEach((point) => {
      const dx = point.originalX - this.mousePos.x
      const dy = point.originalY - this.mousePos.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < wobbleRadius) {
        const influence = 1 - distance / wobbleRadius
        const wobble = Math.sin(influence * Math.PI) * wobbleStrength

        const angle = Math.atan2(dy, dx)
        point.x = point.originalX + Math.cos(angle) * wobble * influence
        point.y = point.originalY + Math.sin(angle) * wobble * influence
      } else {
        // Smoothly return to original position
        point.x += (point.originalX - point.x) * 0.1
        point.y += (point.originalY - point.y) * 0.1
      }
    })
  }

  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Get current theme
    const isDarkMode = document.body.classList.contains("dark-mode")
    const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(110, 109, 109, 0.25)"

    // Set grid style
    this.ctx.strokeStyle = gridColor
    this.ctx.lineWidth = 1

    const gridSize = 50

    // Draw horizontal lines
    for (let y = 0; y <= this.canvas.height + gridSize; y += gridSize) {
      this.ctx.beginPath()
      const pointsOnLine = this.gridPoints
        .filter((p) => Math.abs(p.originalY - y) < 1)
        .sort((a, b) => a.originalX - b.originalX)

      if (pointsOnLine.length > 0) {
        this.ctx.moveTo(pointsOnLine[0].x, pointsOnLine[0].y)
        for (let i = 1; i < pointsOnLine.length; i++) {
          this.ctx.lineTo(pointsOnLine[i].x, pointsOnLine[i].y)
        }
      }
      this.ctx.stroke()
    }

    // Draw vertical lines
    for (let x = 0; x <= this.canvas.width + gridSize; x += gridSize) {
      this.ctx.beginPath()
      const pointsOnLine = this.gridPoints
        .filter((p) => Math.abs(p.originalX - x) < 1)
        .sort((a, b) => a.originalY - b.originalY)

      if (pointsOnLine.length > 0) {
        this.ctx.moveTo(pointsOnLine[0].x, pointsOnLine[0].y)
        for (let i = 1; i < pointsOnLine.length; i++) {
          this.ctx.lineTo(pointsOnLine[i].x, pointsOnLine[i].y)
        }
      }
      this.ctx.stroke()
    }
  }

  animate() {
    this.updateGridPoints()
    this.drawGrid()
    this.animationFrame = requestAnimationFrame(() => this.animate())
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
    window.removeEventListener("resize", () => this.resizeCanvas())
    window.removeEventListener("mousemove", () => {})
  }
}

class PortfolioManager {
  constructor() {
    this.grid = null
    this.navbar = document.getElementById("navbar")
    this.init()
  }

  init() {
    this.initializeGrid()
    this.setupScrollNavigation()
    this.setupThemeToggle()
    this.setupSmoothScrolling()
    this.setupSectionFadeAnimations()
    this.setupParallaxEffects()
  }

  initializeGrid() {
    this.grid = new InteractiveGrid()
  }

  setupScrollNavigation() {
    // Show navbar based on About section position
    let ticking = false

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const aboutSection = document.getElementById("about")
          const aboutTop = aboutSection.offsetTop
          const scrollPosition = window.scrollY
          const windowHeight = window.innerHeight

          // Show navbar when About section starts coming into view
          if (scrollPosition >= aboutTop - windowHeight * 0.1) {
            this.navbar.classList.add("visible")
          } else {
            this.navbar.classList.remove("visible")
          }

          // Update active nav link based on scroll position
          this.updateActiveNavOnScroll()
          ticking = false
        })
        ticking = true
      }
    })

    // Handle nav link clicks with smooth scrolling
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href").substring(1)
        const targetSection = document.getElementById(targetId)

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll(".section")
    const navLinks = document.querySelectorAll(".nav-link")

    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active")
      }
    })
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle")
    const body = document.body

    // Check for saved theme preference, default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      body.classList.remove("dark-mode")
      themeToggle.checked = false
    } else {
      body.classList.add("dark-mode")
      themeToggle.checked = true
      localStorage.setItem("theme", "dark")
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        body.classList.add("dark-mode")
        localStorage.setItem("theme", "dark")
      } else {
        body.classList.remove("dark-mode")
        localStorage.setItem("theme", "light")
      }
    })
  }

  setupSmoothScrolling() {
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      })
    })
  }

  setupSectionFadeAnimations() {
    const sections = document.querySelectorAll(".section")

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      sectionObserver.observe(section)
    })
  }

  setupParallaxEffects() {
    // Add subtle parallax effect to cards
    const cards = document.querySelectorAll(".card")

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      cards.forEach((card, index) => {
        const speed = (index + 1) * 0.1
        card.style.transform = `translateY(${rate * speed}px)`
      })
    })
  }
}

// Enhanced scroll to about section function
function scrollToAbout() {
  const aboutSection = document.getElementById("about")
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })

  // Add a subtle animation to the landing section
  const landingSection = document.querySelector(".landing-section")
  landingSection.style.transform = "scale(0.95)"
  landingSection.style.opacity = "0.8"

  setTimeout(() => {
    landingSection.style.transform = "scale(1)"
    landingSection.style.opacity = "1"
  }, 800)
}

// Resume download function
function downloadResume() {
  // Add a subtle animation to the button
  const resumeBtn = document.querySelector(".resume-btn")
  resumeBtn.style.transform = "scale(0.95)"

  setTimeout(() => {
    resumeBtn.style.transform = "scale(1)"
  }, 150)

  const link = document.createElement("a")
  link.href = "\Resume - Kartik Vegad.pdf"
  link.download = "Kartik_Vegad_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Initialize portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioManager()

  // Add loading animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})
