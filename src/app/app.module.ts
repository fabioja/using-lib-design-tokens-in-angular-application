import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectThemeModule } from './components/select-theme/select-theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
