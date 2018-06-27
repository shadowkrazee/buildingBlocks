import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BlockContainerComponent } from './components/block-container/block-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  containers: BlockContainerComponent[];

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.containers = this.generateContainers();
  }

  generateContainers() {
    let newContainers = new Array(26);
    newContainers.forEach((element, index) => {
      element = new BlockContainerComponent(this.sanitizer);
      newContainers[index] = element;
    });
    return newContainers;
  }
}
