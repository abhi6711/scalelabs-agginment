/**
 * Importing all the angular dependencies here
 */
import { AppMaterialModule } from './shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/**
 * Importing all the component here
 */
import { AppComponent } from './app.component';
import {
  HeaderComponent, ContentComponent, FooterComponent, ConvertCurrencyComponent
} from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ConvertCurrencyComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConvertCurrencyComponent]
})
export class AppModule { }
