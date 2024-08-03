import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Gerekli importlar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalModule } from './components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Yolu kontrol edin



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ModalModule,
    PagesModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    provideHttpClient(withFetch()), // HttpClient'i fetch ile yapılandır
    provideClientHydration(), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
