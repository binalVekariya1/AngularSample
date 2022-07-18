import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ENVIRONMENT } from './shared/model/environment.token';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    SharedMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment },],
  bootstrap: [AppComponent]
})
export class AppModule { }
