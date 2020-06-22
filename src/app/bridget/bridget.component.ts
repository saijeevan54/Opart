import {Component, HostListener, Injectable, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-bridget',
  templateUrl: './bridget.component.html',
  styleUrls: ['./bridget.component.scss'],
})
export class BridgetComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas: any;
  c: any;
  constructor( public platform: Platform, public render: Renderer2) {
  }
  permission() {
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      (DeviceMotionEvent as any).requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', () => {});
            }
          })
          .catch(console.error);
    }
  }
  @HostListener('window:devicemotion', ['$event']) DoSomething(ev: DeviceMotionEvent) {
              let dx = ev.accelerationIncludingGravity.x * 5;
              let dy = ev.accelerationIncludingGravity.y * 5;
              let dz = ev.accelerationIncludingGravity.z * 5;
              let t = ev.interval;
              console.log("x is" + dx);
              console.log("y is " + dy + "t is " + t);
              this.draw(dx, dy);

            }
  ngOnInit() {
    this.draw(0, 0);
    console.log(this.canvas);
    }
  draw(dx, dy) {
    console.log(this.canvas);
    this.c = this.canvas.nativeElement;
    this.render.setAttribute(this.c, 'width', this.platform.width());
    this.render.setAttribute(this.c, 'height', this.platform.height() + '');
    console.log(this.c);
    const ctx = this.c.getContext('2d');
    let x = this.platform.width() / 2 + (dx * 5) ;
    let y = this.platform.height() / 2 + (dy * 5) ;
    console.log(x + '   ' + y);
    let k = x * 0.15;
    for ( let r = 0 ; r < 25 ; r += 1) {
      if (r % 2 === 0) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + k * Math.cos(r * (Math.PI / 12)), y + k * Math.sin(r * (Math.PI / 12)));
        ctx.lineTo(x + (2 * k) * Math.cos((r + 1) * (Math.PI / 12)), y + (2*k) * Math.sin((r + 1) * (Math.PI / 12)));
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        for (let i = 1; i < 20 ; i += 1) {
          if (i % 2 === 1) {
            ctx.moveTo(x + (i * k) * Math.cos(r * (Math.PI / 12)), y + (i * k) * Math.sin(r * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 1) * k) * Math.cos(r * (Math.PI / 12)), y + ((i + 1) * k) * Math.sin(r * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 2) * k) * Math.cos((r - 1) * (Math.PI / 12)), y + ((i + 2) * k) * Math.sin((r - 1) * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 1) * k) * Math.cos((r - 1) * (Math.PI / 12)), y + ((i + 1) * k) * Math.sin((r - 1) * (Math.PI / 12)));

          } else {
            ctx.moveTo(x + (i * k) * Math.cos(r * (Math.PI / 12)), y + (i * k) * Math.sin(r * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 1) * k) * Math.cos(r * (Math.PI / 12)), y + ((i + 1) * k) * Math.sin(r  * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 2) * k) * Math.cos((r + 1) * (Math.PI / 12)), y + ((i + 2) * k) * Math.sin((r + 1) * (Math.PI / 12)));
            ctx.lineTo(x + ((i + 1) * k) * Math.cos((r + 1) * (Math.PI / 12)), y + ((i + 1) * k) * Math.sin((r + 1) * (Math.PI / 12)));

          }
        }


      }

    }
  }
  }


