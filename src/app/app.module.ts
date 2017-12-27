import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SampledocComponent } from './components/docs/sampledoc/sampledoc.component';
import { SamplecompanyComponent } from './components/company/samplecompany/samplecompany.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { Faq1Component } from './components/faq1/faq1.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SampledocComponent,
    SamplecompanyComponent,
    HomeComponent,
    FaqComponent,
    Faq1Component,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      
      {
        path:'AboutUs',
        component:AboutusComponent
        
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
