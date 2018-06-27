import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BlockContainerComponent } from './components/block-container/block-container.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [AppComponent, BlockContainerComponent, BlockComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
