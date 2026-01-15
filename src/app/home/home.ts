import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Destination, DESTINATIONS } from '../destination-data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterModule]
})
export class Home implements OnInit, AfterViewInit {

  destinations: Destination[] = DESTINATIONS.filter(dest =>
    [5, 10, 11, 12].includes(dest.id)
  );

  testimonials = [
    {
      name: 'Mickey Zambello',
      handle: '@mickeyz',
      quote: 'Felt like a VIP throughout the entire itinerary.',
      image: 'assets/images/slide1.jpg',
      rating: 5
    },
    {
      name: 'Raj Mehta',
      handle: 'Travel Blogger',
      quote: 'Smooth booking and friendly guides!',
      image: 'assets/images/slide2.jpg',
      rating: 4
    },
    {
      name: 'Sophia Lin',
      handle: '@sophiaexplores',
      quote: 'Breathtaking destinations and perfect timing.',
      image: 'assets/images/slide3.jpg',
      rating: 4.5
    },
    {
      name: 'Liam Carter',
      handle: '@liamtravels',
      quote: 'Every detail was handled with care. Loved it!',
      image: 'assets/images/slide4.jpg',
      rating: 5
    },
    {
      name: 'Aisha Khan',
      handle: 'Solo Explorer',
      quote: 'Safe, scenic, and unforgettable.',
      image: 'assets/images/corporate.jpg',
      rating: 3
    },
    {
      name: 'Carlos Rivera',
      handle: '@carlosjourneys',
      quote: 'The best travel experience I have ever had.',
      image: 'assets/hero-sec.jpg',
      rating: 4.5
    }
  ];

  currentIndex = 0;
  videoUrl: SafeResourceUrl;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://explorehubhomevideo.s3.us-east-1.amazonaws.com/homepage.mp4');
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  ngAfterViewInit(): void {
    this.observeElements();
  }

  observeElements(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.destination-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.chat-bubble').forEach((bubble, index) => {
      (bubble as HTMLElement).style.animationDelay = `${index * 0.15}s`;
      observer.observe(bubble);
    });
    document.querySelectorAll('.collage-img').forEach(img => observer.observe(img));

    const testimonialSection = document.querySelector('.testimonial-header');
    if (testimonialSection) observer.observe(testimonialSection);
  }

  getCardClass(index: number): string {
    if (index === this.currentIndex) return 'active';
    if (index === (this.currentIndex + 1) % this.testimonials.length) return 'right';
    if (index === (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length) return 'left';
    return 'hidden';
  }

  goToDetails(id: number) {
    this.router.navigate(['/destination', id]);
  }

  goToBooknow() {
    this.router.navigate(['/booknow']);
  }

  goToDestinations() {
    this.router.navigate(['/destinations']);
  }
}
