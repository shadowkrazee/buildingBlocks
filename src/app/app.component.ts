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
    let bottom = false;
    let right = false;
    let row = 2;
    let column = 0;
    while (!bottom || !right) {
      if (!bottom) {
        bottom = row > this.containers.length ? false : true;
        console.log(this.containers);
        console.log(this.containers[row]);
        console.log(row);
        bottom = true;
      }
      if (!right) {
        right = true;
      }
    }
  }

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    BlockContainerComponent.currentRowIndex = 0;
    this.generateContainers();
    console.log(this.containers);
  }

  generateContainers() {
    this.containers = new Array(26);
    this.containers.forEach((element, index) => {
      element = new BlockContainerComponent(this.sanitizer);
      this.containers[index] = element;
    });
  }
}
