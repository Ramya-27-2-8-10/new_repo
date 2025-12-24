import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Booknow } from './booknow/booknow';
import { Payment } from './payment/payment';
import { Contact } from './contact/contact';
import { DestinationsComponent } from './destinations/destinations';
import { DestinationsData } from './destinations-data/destinations-data';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'booknow', component: Booknow },
  { path: 'payment', component: Payment },
  { path: 'contact', component: Contact },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destination/:id', component: DestinationsData },
  { path: 'login', component: Login }
];
