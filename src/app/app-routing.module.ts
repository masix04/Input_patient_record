import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JsonServerComponent } from './json-server/json-server.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

const routes: Routes = [

  // used Json-server with data.json data file & used rest.service.ts to get data from file 
  // And using Web Showing in a Table Form
  /**
   * Steps 
   * 0- In CMD => npm install -g json-server 'MEANING' - If Server is not installed 
   * 1- In CMD => json-server --watch data.json 'MEANING' - Run the REST-SERVER
   */
  { path : 'json-server-data', component: JsonServerComponent},

  { path : 'patient-form', component: PatientFormComponent},

  // Otherwise redirect to home
  { path : '**', redirectTo: 'patient-form'},  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
