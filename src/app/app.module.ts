import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainTextComponent } from './main-text/main-text.component';
import { SectionOnlineComponent } from './section-online/section-online.component';
import { SectionUsComponent } from './section-us/section-us.component';
import { SectionProjectComponent } from './section-project/section-project.component';

import { ProjectService } from './service/project.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainTextComponent,
    SectionOnlineComponent,
    SectionUsComponent,
    SectionProjectComponent
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
