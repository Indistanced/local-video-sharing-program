import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact', component: ContactComponent }
];
