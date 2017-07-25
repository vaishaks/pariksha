import { Component, OnInit } from '@angular/core';
import { ImageCapture } from 'image-capture';

@Component({
  selector: 'input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})

export class InputImageComponent implements OnInit {

  clicked: boolean;
  photo: any;

  constructor() {
    this.clicked = false;

    this.photo = document.getElementById('photo');
   }

  ngOnInit() {
      // Grab elements, create settings, etc.
      const video1: any = document.getElementById('video');

      // Get access to the camera!
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function(stream) {
              video1.src = window.URL.createObjectURL(stream);
              video1.play();
          });
      }
  }

  capture() {
    this.clicked = true;

    const canvas: any = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const video = document.getElementById('video');
    context.drawImage(video, 0, 0, 300, 150);
    var data = canvas.toDataURL('image/png');
    document.getElementById('photo').setAttribute('src', data);
  }

  cancelCapture() {
    this.clicked = false;
  }

  submitCapture() {
    var imageSrc = document.getElementById('photo').getAttribute('src');
  }

}