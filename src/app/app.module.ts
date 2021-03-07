import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDisplayerComponent } from './grid-displayer/grid-displayer.component';
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
@NgModule({
  declarations: [AppComponent, GridDisplayerComponent, PhotoDisplayerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgImageFullscreenViewModule,

    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
