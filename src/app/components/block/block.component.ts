import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
  animations: [
    trigger('blockState', [
      state(
        'inactive',
        style({
          backgroundColor: 'black'
        })
      ),
      state(
        'active',
        style({
          backgroundColor: 'red'
        })
      ),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class BlockComponent implements OnInit, OnDestroy {
  bgColor: number;
  bgColorString: string;
  hovColor: number;
  hovColorString: string;
  safeStyle: SafeStyle;
  interval: any;
  public state: string;
  constructor(private sanitizer: DomSanitizer) {
    this.state = 'inactive';
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.toggleState();
    }, Math.floor(1000 + Math.random() * 9000));
  }
  ngOnDestroy() {
    clearInterval(this.interval);
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
  randomColor() {
    let hue = Math.floor(Math.random() * 359);
    let color = 'hsl(' + hue + ',100%,50%)';
    return color;
  }

  // getComplimentaryColor(color: number) {
  //   let compliment = color - 360;
  //   if (compliment < 0) {
  //     compliment = compliment * -1;
  //   }
  //   return compliment;
  // }
  // makeStrings(flag: string) {
  //   this.bgColorString = 'hsl(' + this.bgColor + ',100%,50%);';
  //   if (flag === 'first') {
  //     this.bgColorString = 'hsl(' + this.bgColor + ',100%,0%);';
  //   }
  //   this.hovColorString = 'hsl(' + this.hovColor + ',100%,50%);';
  //   // console.log(this.bgColorString);
  //   let styleString =
  //     `
  // 		height:2vw;
  // 		width:2vw;
  // 		margin:1px;
  // 		border-radius:5px;` +
  //     'background-color:' +
  //     this.bgColorString;

  //   this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  // }
  // applyHovBG() {
  //   let styleString =
  //     `
  // 		height:2vw;
  // 		width:2vw;
  // 		margin:1px;
  // 		border-radius:5px;` +
  //     'background-color:' +
  //     this.hovColorString;
  //   // console.log('bg changed to hov');
  //   this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  // }
  // applyRegBG() {
  //   this.getColors();
  //   let styleString =
  //     `
  // height:2vw;
  // width:2vw;
  // margin:1px;
  // border-radius:5px;` +
  //     'background-color:' +
  //     this.bgColorString;
  //   // console.log('bg changed to reg');
  //   this.safeStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  // }
}
