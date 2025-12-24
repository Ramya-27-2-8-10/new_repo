import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { PLATFORM_ID } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment implements OnInit {
  paymentForm!: FormGroup;
  paymentConfirmed = false;
  razorpayTxnId = '';

  fullName = 'Guest';
  email = 'Not provided';
  phone = 'Not provided';
  destination = 'Unknown';
  travelDate = 'Not specified';
  startDate = '';
  endDate = '';
  peopleCount = '1';
  rawAmount = 0;
  amount = '';
  bookingTime = '';
  destinationImagePath = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    let data = null;

    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('paymentData');
      data = saved ? JSON.parse(saved) : null;
      console.log('Fetched paymentData:', data);
    }

    this.fullName = data?.fullName ?? 'Guest';
    this.email = data?.email ?? 'Not provided';
    this.phone = data?.phone ?? 'Not provided';
    this.destination = data?.destination ?? 'Unknown';
    this.startDate = data?.startDate ?? 'Not specified';
    this.endDate = data?.endDate ?? 'Not specified';
    this.travelDate = `${this.startDate} to ${this.endDate}`;
    this.peopleCount = data?.peopleCount?.toString() ?? '1';

    const raw = data?.amount;
    this.rawAmount = typeof raw === 'string'
      ? parseInt(raw.replace(/[^\d]/g, ''), 10)
      : typeof raw === 'number'
        ? raw
        : 0;

    this.amount = `Rs. ${new Intl.NumberFormat('en-IN').format(this.rawAmount)}`;

    this.bookingTime = new Date(data?.bookingTime ?? Date.now()).toLocaleString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour12: true
    });

    this.destinationImagePath = data?.destinationImagePath ?? '';

    this.paymentForm = this.fb.group({
      transactionId: ['']
    });
  }

  launchRazorpay(): void {
    const options = {
      key: 'rzp_test_Rbit20rcqN2JS8',
      amount: this.rawAmount * 100,
      currency: 'INR',
      name: 'ExploreHub',
      description: `Booking for ${this.destination}`,
      image: 'assets/icons/logo1.png',
      handler: (response: any) => {
        this.razorpayTxnId = response.razorpay_payment_id;
        this.paymentForm.patchValue({ transactionId: this.razorpayTxnId });
        this.paymentConfirmed = true;
      },
      prefill: {
        name: this.fullName,
        email: this.email,
        contact: this.phone
      },
      theme: {
        color: '#007bff'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
downloadTicket(): void {
  const txnId = this.paymentForm.value.transactionId;
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const marginX = 20;
  const marginTop = 30;
  const imageWidth = 80;
  const imageHeight = 50;
  const imageX = (pageWidth - imageWidth) / 2;
  const lineHeight = 10;

  const title = 'ExploreHub Travel Ticket';

  const renderContent = (bgImage?: string, destinationImage?: string) => {
    // 🗺️ Full-page background image
    if (bgImage) {
      doc.addImage(bgImage, 'JPEG', 0, 0, pageWidth, pageHeight);
    }

    // 🖼️ Rounded border on top of background
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.5);
    doc.roundedRect(10, 10, pageWidth - 20, pageHeight - 20, 5, 5);

    // 🏷️ Title
    doc.setFont('times', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(30, 30, 30);
    doc.text(title, (pageWidth - doc.getTextWidth(title)) / 2, marginTop);

    // 🖼️ Destination Image (optional)
    if (destinationImage) {
      doc.addImage(destinationImage, 'JPEG', imageX, marginTop + 10, imageWidth, imageHeight);
    }

    // 📋 Booking Details
    doc.setFont('helvetica');
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);

    let y = marginTop + (destinationImage ? imageHeight + 30 : 20);

    const addLine = (label: string, value: string | number) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${label}:`, marginX, y);
      doc.setFont('helvetica', 'normal');
      doc.text(String(value), marginX + 55, y);
      y += lineHeight;
    };

    addLine('Passenger Name', this.fullName);
    addLine('Email', this.email);
    addLine('Phone', this.phone);
    addLine('No. of People', this.peopleCount);
    addLine('Destination', this.destination);
    addLine('Start Date', this.startDate);
    addLine('End Date', this.endDate);

    const amountText = String(this.amount).includes('Rs') ? this.amount : `Rs. ${this.amount}`;
    addLine('Amount Paid', amountText);

    addLine('Razorpay Payment ID', txnId);
    addLine('Booking Time', this.bookingTime);

    // ✅ Confirmation Message
    doc.setFontSize(13);
    doc.setTextColor(0, 128, 0);
    doc.text('Booking Confirmed.Thank you for choosing ExploreHub!', marginX, y + 10);

    doc.save(`ExploreHub_Ticket_${this.destination}.pdf`);
    localStorage.removeItem('paymentData');
  };

  // Load both images in parallel
  const loadImage = (src: string): Promise<string | undefined> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg'));
      };
      img.onerror = () => resolve(undefined);
    });
  };

  Promise.all([
    loadImage('assets/images/world_map.jpg'),
    loadImage(this.destinationImagePath)
  ]).then(([bgImageData, destinationImageData]) => {
    renderContent(bgImageData, destinationImageData);
  });
}



  goBack(): void {
    this.router.navigate(['/booknow']);
  }
}
