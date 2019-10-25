import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableNumbersComponent } from './components/table-numbers/table-numbers.component';
import { TableLettersComponent } from './components/table-letters/table-letters.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'numbers', component: TableNumbersComponent },
  { path: 'letters', component: TableLettersComponent },
  { path: '',   redirectTo: '/numbers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, scrollPositionRestoration: 'enabled' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
