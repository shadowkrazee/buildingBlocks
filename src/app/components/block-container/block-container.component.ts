import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() clear = new EventEmitter<string>();

  startGridClear() {
    this.clear.emit('clear!');
  }
  ngOnInit() {
    BlockComponent.currentColumnIndex = 0;
    this.blocks = new Array(47);
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i] = new BlockComponent(this.sanitizer);
    }
    BlockContainerComponent.currentRowIndex++;
  }
  gridClear() {
    this.startGridClear();
  }
  public resetBlocks() {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].defBG = false;
      this.blocks[i].toggleBG();
    }
  }
}
