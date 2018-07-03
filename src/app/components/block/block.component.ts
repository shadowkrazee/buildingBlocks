import { state } from '@angular/animations';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { BlockContainerComponent } from '../block-container/block-container.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit, OnDestroy {
  public static currentColumnIndex = 0;
  columnIndex: number;
  rowIndex: number;
  bgColorString: string;
  defBG: boolean;
  commonStyleString: string;
  safeStyle: SafeStyle;
  interval: any;
  public state: string;

  @Output() clear = new EventEmitter<string>();

  startGridClear() {
    this.clear.emit('clear!');
  }
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.state = 'inactive';
    this.columnIndex = BlockComponent.currentColumnIndex;
    BlockComponent.currentColumnIndex++;
    this.rowIndex = BlockContainerComponent.currentRowIndex - 1;

    this.commonStyleString =
      'height:2vw;width:2vw;margin:1px;border-radius:0.5vw;transition:background-color 2s ease;box-shadow:0px 0px 5px 5px ';
    this.bgColorString = 'hsl(0,0%,0%);';
    this.defBG = false;
    this.toggleBG();
  }
  ngOnDestroy() {
    // clearInterval(this.interval);
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    // console.log(this.state);
  }
  randomColorString() {
    let hue = Math.floor(Math.random() * 359);
    let saturation = Math.floor(50 + Math.random() * 50);
    let color = 'hsl(' + hue + ',' + saturation + '%,50%)';
    return color;
  }
  toggleBG() {
    let styleString = '';
    if (!this.defBG) {
      styleString =
        this.commonStyleString +
        this.randomColorString() +
        ';background-color:' +
        this.bgColorString;
      this.defBG = true;
    } else {
      styleString =
        this.commonStyleString +
        this.randomColorString() +
        ';background-color:' +
        this.randomColorString();
      this.defBG = false;
    }
    // console.log('bg changed to hov');
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  }
}
