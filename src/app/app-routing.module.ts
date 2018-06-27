import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent }    from './personal/personal.component';

import { AddressComponent }     from './address/address.component';
import { ResultComponent }      from './result/result.component';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'personal',  component: PersonalComponent },
    // 2nd Route
   
    // 3rd Route
    { path: 'address',  component: AddressComponent },
    // 4th Route
    { path: 'result',  component: ResultComponent},
    // 5th Route
    { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}