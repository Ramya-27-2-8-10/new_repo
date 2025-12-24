import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PLATFORM_ID } from '@angular/core';
import { BookingDataService } from '../destinations-data/destinations-data';
import { Destination } from '../destination-data';

@Component({
  selector: 'app-booknow',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './booknow.html',
  styleUrls: ['./booknow.css']
})
export class Booknow implements OnInit {
  bookingForm!: FormGroup;
  bookingConfirmed = false;
  agreedToTerms = false;
  minDate!: string;
  rawAmount = 0;
  destinationData!: Destination;

  steps = [
    { label: 'Personal Info', icon: 'assets/icons/booking_progress/personal.png' },
    { label: 'Travel Details', icon: 'assets/icons/booking_progress/calendar.png' },
    { label: 'Destination', icon: 'assets/icons/booking_progress/destination.png' },
    { label: 'Special Requests', icon: 'assets/icons/booking_progress/request.png' },
    { label: 'Confirmation', icon: 'assets/icons/booking_progress/tick.png' }
  ];

  totalSteps = this.steps.length;
  currentStep = 1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private bookingDataService: BookingDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];

    const data = this.bookingDataService.getDestination();
    if (!data) {
      console.warn('No destination data found');
      this.router.navigate(['/destinations']);
      return;
    }

    this.destinationData = data;
    this.rawAmount = data.price ?? 0;

    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      city: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      whatsapp: [''],
      destination: [{ value: data.name, disabled: true }, Validators.required],
      amount: [{ value: `₹${this.rawAmount}`, disabled: true }],
      startDate: ['', [Validators.required, this.noPastDateValidator()]],
      endDate: ['', [Validators.required, this.noPastDateValidator()]],
      peopleCount: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      specialRequests: ['']
    }, { validators: this.dateRangeValidator });

    // 🔁 Dynamic price update based on peopleCount
    this.bookingForm.get('peopleCount')?.valueChanges.subscribe(count => {
      const people = Number(count);
      const total = people > 0 ? this.rawAmount * people : this.rawAmount;
      this.bookingForm.patchValue({ amount: `₹${total.toLocaleString('en-IN')}` });
    });
  }

  noPastDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const selected = new Date(control.value);
      const today = new Date();
      selected.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      return selected >= today ? null : { pastDate: true };
    };
  }

  dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const start = new Date(group.get('startDate')?.value);
    const end = new Date(group.get('endDate')?.value);
    if (!start || !end) return null;
    return end >= start ? null : { dateRangeInvalid: true };
  }

  nextStep(): void {
    if (this.validateCurrentStep()) {
      if (this.currentStep === 4) {
        this.onSubmit();
      } else {
        this.currentStep++;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.validateControls(['fullName', 'email', 'phone']);
      case 2:
        return this.validateControls(['startDate', 'endDate', 'peopleCount']);
      case 3:
        return this.validateControls(['destination']);
      case 4:
        return true;
      default:
        return true;
    }
  }

  validateControls(controlNames: string[]): boolean {
    let isValid = true;
    controlNames.forEach(name => {
      const control = this.bookingForm.get(name);
      if (control) {
        control.markAsTouched();
        if (control.invalid) {
          isValid = false;
        }
      }
    });
    return isValid;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.getRawValue();
      console.log('Final booking data:', formData);
      this.bookingConfirmed = true;
      this.currentStep = 5;
    } else {
      this.bookingForm.markAllAsTouched();
      this.bookingConfirmed = false;
    }
  }

  goToPayment(): void {
  if (this.agreedToTerms) {
    const formData = this.bookingForm.getRawValue();

    const bookingData = {
      destination: this.destinationData.name,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      startDate: formData.startDate,
      endDate: formData.endDate,
      peopleCount: formData.peopleCount,
      amount: this.rawAmount * Number(formData.peopleCount),
      bookingTime: Date.now(),
      destinationImagePath: this.destinationData.image // ✅ use image from data
    };

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('paymentData', JSON.stringify(bookingData));
    }

    this.router.navigate(['/payment']);
  }
}

}
