import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DESTINATIONS } from '../destination-data';

@Component({
  selector: 'app-destinations',
  standalone: true,
  templateUrl: './destinations.html',
  styleUrls: ['./destinations.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class DestinationsComponent {
  destinations = DESTINATIONS;
  filteredDestinations = DESTINATIONS;

  searchTerm = '';
  selectedTag = '';
  maxPrice: number | null = null;
  selectedDuration = '';
  selectedSeason = '';

  tagOptions = [
    'luxury', 'culture', 'heritage', 'romantic', 'beach',
    'adventure', 'spiritual', 'multi-country', 'scenic',
    'mountains', 'budget'
  ];

  durationOptions = ['3 Days', '5 Days', '7 Days', '10 Days'];
  seasonOptions = ['October to March', 'April to June', 'May to September'];

  filterDestinations(): void {
    this.filteredDestinations = this.destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesTag = this.selectedTag ? dest.tags.includes(this.selectedTag) : true;
      const matchesPrice = this.maxPrice !== null ? dest.price <= this.maxPrice : true;
      const matchesDuration = this.selectedDuration ? dest.duration === this.selectedDuration : true;
      const matchesSeason = this.selectedSeason ? dest.bestTimeToVisit === this.selectedSeason : true;

      return matchesSearch && matchesTag && matchesPrice && matchesDuration && matchesSeason;
    });
  }
}
