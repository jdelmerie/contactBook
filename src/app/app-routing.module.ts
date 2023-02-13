import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { FormComponent } from './contacts/form/form.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { PageNotFoundComponent } from './contacts/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'liste', component: ListContactComponent, canActivate: [AuthGuard] },
  { path: 'contact/:id', component: DetailContactComponent, canActivate: [AuthGuard] },
  { path: 'add', component: FormComponent, data: { link: 'add' }, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: FormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent, },
  { path: '**', redirectTo: '/404', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
