// Interactive Effects for Enhanced User Experience
class InteractiveEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupParallaxEffects();
    this.setupHoverEffects();
    this.setupLoadingAnimations();
    this.setupTypingEffect();
  }

  // Scroll-triggered animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Stagger animations for child elements
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.content-section, .feature-card, .tree-node').forEach(el => {
      observer.observe(el);
    });
  }

  // Parallax scrolling effects
  setupParallaxEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      // Background parallax for hero section
      const heroSection = document.querySelector('.slideshow-container');
      if (heroSection) {
        const yPos = scrolled * 0.3;
        heroSection.style.backgroundPosition = `center ${yPos}px`;
      }
    });
  }

  // Enhanced hover effects
  setupHoverEffects() {
    // Magnetic effect for buttons
    document.querySelectorAll('.cta-button, .nav-button').forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
      });
    });

    // Tilt effect for cards
    document.querySelectorAll('.feature-card, .tree-node').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  // Loading animations
  setupLoadingAnimations() {
    // Animate elements on page load
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Animate navigation items
      const navItems = document.querySelectorAll('.nav-link');
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });

      // Animate hero content
      const heroContent = document.querySelector('.slide-content');
      if (heroContent) {
        setTimeout(() => {
          heroContent.classList.add('animate-hero');
        }, 500);
      }
    });
  }


  // Typing effect for headlines
  setupTypingEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter-text');
    
    typewriterElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.opacity = '1';
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          element.classList.add('typing-complete');
        }
      }, 100);
    });
  }

  // Particle system for background
  createParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76, 201, 240, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(76, 201, 240, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // Smooth scrolling for navigation
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Reveal animations on scroll
  revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
}

// CSS for interactive effects
const interactiveCSS = `
  
  /* Particle Canvas */
  .particle-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.6;
  }
  
  /* Animation Classes */
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .stagger-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .animate-hero {
    animation: heroEntrance 1.5s ease-out;
  }
  
  @keyframes heroEntrance {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* Typewriter Effect */
  .typewriter-text {
    opacity: 0;
    border-right: 2px solid #4cc9f0;
    animation: blink 1s infinite;
  }
  
  .typing-complete {
    border-right: none;
    animation: none;
  }
  
  @keyframes blink {
    0%, 50% { border-color: #4cc9f0; }
    51%, 100% { border-color: transparent; }
  }
  
  /* Reveal Animation */
  .reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }
  
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Loading State */
  body:not(.loaded) .nav-link {
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease;
  }
  
  /* Enhanced Hover Effects */
  .feature-card, .tree-node {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cta-button, .nav-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Parallax Elements */
  .parallax-element {
    will-change: transform;
  }
  
  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Mobile Optimizations */
  @media (max-width: 768px) {
    .particle-canvas {
      opacity: 0.3;
    }
  }
`;

// Inject CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = interactiveCSS;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new InteractiveEffects();
  });
} else {
  new InteractiveEffects();
}

export default InteractiveEffects;
