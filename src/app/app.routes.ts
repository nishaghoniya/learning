import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';

export const routes: Routes = [
    {path:  "", pathMatch:  "full",redirectTo:  "home"},
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "feedback", component: FeedbackComponent }
];
