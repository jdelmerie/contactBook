import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { FormComponent } from './contacts/form/form.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';

const routes: Routes = [
  { path: 'liste', component: ListContactComponent },
  { path: 'contact/:id', component: DetailContactComponent },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/liste', pathMatch: 'full' },
      { path: 'add', component: FormComponent, data: { link: 'add' } },
      { path: 'edit/:id', component: FormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
