import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PerguntaUfopModule } from './pergunta-ufop/pergunta-ufop.module';
import { NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PerguntaUfopModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
