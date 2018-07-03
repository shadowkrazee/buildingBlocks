import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BlockContainerComponent } from './components/block-container/block-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  containers: BlockContainerComponent[];
  title = 'app';

  public gridClear() {
    // let bottom = false;
    // let right = false;
    // let row = 0;
    // let column = 0;
    // while (!bottom) {
    //   if (!bottom) {
    //     bottom = row > this.containers.length ? false : true;
    //     this.containers[row].resetBlocks();
    //     row++;
    //     // bottom = true;
    //   }
    // }
    this.generateContainers();
  }

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.generateContainers();
    // console.log(this.containers);
  }

  generateContainers() {
    BlockContainerComponent.currentRowIndex = 0;
    this.containers = new Array(26);
    for (let i = 0; i < this.containers.length; i++) {
      this.containers[i] = new BlockContainerComponent(this.sanitizer);
    }
  }
}
