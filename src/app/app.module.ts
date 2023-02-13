import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactService } from './services/contact.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_FEATURE_KEY, rootReducer, metaReducers } from './ngrx/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './ngrx/app.effects';
import { DetailContactComponent } from './contacts/detail-contact/detail-contact.component';
import { LoaderComponent } from './loader/loader.component';
import { BorderCardDirective } from './contacts/border-card.directive';
import { FormComponent } from './contacts/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent,
    DetailContactComponent,
    LoaderComponent,
    BorderCardDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
