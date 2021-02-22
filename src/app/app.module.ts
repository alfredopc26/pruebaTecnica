import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTextComponent } from './main-text/main-text.component';
import { SectionOnlineComponent } from './section-online/section-online.component';
import { SectionUsComponent } from './section-us/section-us.component';
import { SectionProjectComponent } from './section-project/section-project.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component'

import { ProjectService } from './service/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainTextComponent,
    SectionOnlineComponent,
    SectionUsComponent,
    SectionProjectComponent,
    SectionContactComponent,
    FooterComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
