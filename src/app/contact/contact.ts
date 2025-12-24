import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements AfterViewInit {
  contactForm: FormGroup;
  messageSent: boolean = false;

  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Contact form submitted:', this.contactForm.value);
      this.messageSent = true;
      this.contactForm.reset();
    } else {
      this.messageSent = false;
      this.contactForm.markAllAsTouched();
    }
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

    observeElements('.top-section');
    observeElements('.main-heading');
    observeElements('.description');
    observeElements('.contact-info');
    observeElements('.info-card');
    observeElements('.form-group');
    observeElements('.submit-btn');
    observeElements('.text-content');
  }
}
