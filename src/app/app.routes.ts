import { Routes } from '@angular/router';
import { CountdownPage } from './countdown.page';
import { SummaryComponent } from './summary.component';

export const routes: Routes = [
    { path: 'summary', component: SummaryComponent },
    { path: 'countdown', component: CountdownPage },
    { path: '', redirectTo: '/countdown', pathMatch: 'full' },
];
