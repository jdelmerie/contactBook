import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';

const routes: Routes = [
  {path: 'liste', component: ListContactComponent},
  {path: 'contact/:id', component: DetailContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
