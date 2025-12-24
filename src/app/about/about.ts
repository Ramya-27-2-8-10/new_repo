import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit, AfterViewInit {
  testimonials = [
    {
      quote: '“The trip to Norway was magical — every detail was perfect!”',
      author: '— Aditi, Solo Explorer'
    },
    {
      quote: '“Booking was seamless, and the guides were incredibly helpful.”',
      author: '— Ramesh, Family Traveler'
    }
  ];

  highlights = [
    {
      title: '🌄 Scenic Spots',
      description: 'Explore breathtaking destinations curated for wanderers like you.'
    },
    {
      title: '🛡️ Safe Travels',
      description: 'We prioritize your safety with verified guides and secure stays.'
    },
    {
      title: '💰 Transparent Pricing',
      description: 'No hidden fees. Just honest, clear packages tailored to your needs.'
    }
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('AboutComponent loaded');
  }

  ngAfterViewInit(): void {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'animate');
        }
      });
    }, observerOptions);

    const observeElements = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => observer.observe(el));
    };

    // Observe animated elements
    observeElements('.about-text');
    observeElements('.about-image');
    observeElements('.feature-item');
    observeElements('.badge');
    observeElements('.service-card');
    observeElements('.news-heading');
    observeElements('.news-card');

    // Parallax effect
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        (heroSection as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      });
    }
  }
}
