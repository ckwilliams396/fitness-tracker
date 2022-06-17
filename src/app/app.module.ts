import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ButtonComponent } from './components/button/button.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { AddGoalComponent } from './components/add-goal/add-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoalsComponent,
    ButtonComponent,
    WorkoutsComponent,
    AddGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
