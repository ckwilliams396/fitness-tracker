import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';

const routes: Routes = [
  { path: 'goals-component', component: GoalsComponent},
  {path: 'workouts-component', component: WorkoutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
