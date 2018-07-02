import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(private sanitizer: DomSanitizer) {
    this.state = 'inactive';
    this.columnIndex = BlockComponent.currentColumnIndex;
    BlockComponent.currentColumnIndex++;
    this.rowIndex = BlockContainerComponent.currentRowIndex;
  }

  ngOnInit() {
    this.commonStyleString =
      'height:2vw;width:2vw;margin:1px;border-radius:5px;transition:background-color 2s ease;';
    this.bgColorString = 'hsl(0,0%,0%);';
    this.defBG = false;
    this.toggleBG();
    // this.interval = setInterval(() => {
    //   this.toggleState();
    // }, Math.floor(1000 + Math.random() * 9000));
  }
  ngOnDestroy() {
    // clearInterval(this.interval);
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    // console.log(this.state);
  }
  // getColors() {
  //   this.bgColor = this.randomColor();
  //   this.hovColor = this.getComplimentaryColor(this.bgColor);
  //   this.makeStrings('notFirst');
  // }
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
        this.commonStyleString + 'background-color:' + this.bgColorString;
      this.defBG = true;
    } else {
      styleString =
        this.commonStyleString + 'background-color:' + this.randomColorString();
      this.defBG = false;
    }
    // console.log('bg changed to hov');
    this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  }
}
