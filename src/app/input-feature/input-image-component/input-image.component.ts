import { Component, OnInit } from '@angular/core';
import { ImageCapture } from 'image-capture';

@Component({
  selector: 'input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // Grab elements, create settings, etc.
      const video1: any = document.getElementById('video');

      // Get access to the camera!
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
              video1.src = window.URL.createObjectURL(stream);
              video1.play();
          });
      }
  }

  capture() {
    const canvas: any = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const video = document.getElementById('video');
    context.drawImage(video, 0, 0, 640, 480);
  }

}
