import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DESTINATIONS, Destination } from '../destination-data';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';



@Injectable({ providedIn: 'root' })
export class BookingDataService {
  private destinationData: Destination | null = null;

  setDestination(data: Destination): void {
    this.destinationData = data;
  }

  getDestination(): Destination | null {
    return this.destinationData;
  }

  clearDestination(): void {
    this.destinationData = null;
  }
}

@Component({
  selector: 'app-destinations-data',
  standalone: true,
  templateUrl: './destinations-data.html',
  styleUrls: ['./destinations-data.css'],
  imports: [CommonModule, SafeUrlPipe]
})
export class DestinationsData implements OnInit, OnDestroy {
  destination!: Destination;
  selectedImage: string = '';
  imageList: string[] = [];

   faqs = [
    { key: 'duration', question: 'What is the duration of the trip?', icon: '🗓', open: false },
    { key: 'destinations', question: 'What destinations are covered?', icon: '📍', open: false },
    { key: 'bestTime', question: 'When is the best time to visit?', icon: '🌤', open: false },
    { key: 'itinerary', question: 'What does the itinerary look like?', icon: '📅', open: false },
    { key: 'hotels', question: 'Where will I stay?', icon: '🏨', open: false },
    { key: 'transport', question: 'What transportation options are available?', icon: '✈', open: false },
    { key: 'activities', question: 'What activities are included?', icon: '🎯', open: false },
    { key: 'attractions', question: 'What are the top attractions?', icon: '📸', open: false }
  ];



  currentFaq = this.faqs[0];
  faqIndex = 0;
  faqInterval!: ReturnType<typeof setInterval>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingDataService: BookingDataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = DESTINATIONS.find(dest => dest.id === id);

    if (!found) {
      console.warn('Destination not found for ID:', id);
      this.router.navigate(['/destinations']);
      return;
    }

    this.destination = found;
    this.imageList = found.images ?? [];
    this.selectedImage = this.imageList.length > 0 ? this.imageList[0] : found.image;
    


    this.startFaqRotation();
  }

  startFaqRotation(): void {
    this.currentFaq = this.faqs[this.faqIndex];
    this.faqInterval = setInterval(() => {
      this.faqIndex = (this.faqIndex + 1) % this.faqs.length;
      this.currentFaq = this.faqs[this.faqIndex];
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.faqInterval);
  }

  updateMainImage(image: string): void {
    this.selectedImage = image;
  }

  goToDestinations(): void {
    this.router.navigate(['/destinations']);
  }

  goToBooknow(): void {
    // Store in service for Angular state sharing
    this.bookingDataService.setDestination(this.destination);

    // Store in localStorage for persistence across refresh
    const bookingPayload = {
      destination: this.destination.name,
      price: this.destination.price
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingPayload));

    this.router.navigate(['/booknow']);
  }

  getFlights(): string {
    return this.destination.transportation?.flights?.join(', ') || 'N/A';
  }

  getBuses(): string {
    return this.destination.transportation?.buses?.join(', ') || 'N/A';
  }
}
