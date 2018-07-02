import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.css']
})
export class BlockContainerComponent implements OnInit {
  public static currentRowIndex = 0;
  blocks: BlockComponent[];
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    BlockComponent.currentColumnIndex = 0;
    this.blocks = this.generateBlocks();
    BlockContainerComponent.currentRowIndex++;
  }

  generateBlocks() {
    let newBlocks = new Array(47);
    newBlocks.forEach((element, index) => {
      element = new BlockComponent(this.sanitizer);
      newBlocks[index] = element;
    });
    return newBlocks;
  }
}
