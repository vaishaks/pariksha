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
    navigator.mediaDevices.getUserMedia({video: true})
    .then(mediaStream => {
      console.log(mediaStream);
      document.querySelector('video').srcObject = mediaStream;

      const track = mediaStream.getVideoTracks()[0];      
      var imageCapture = new ImageCapture(track);      
    })
    .catch(error => console.log(error));
  }

  
  startVideo() {
  }

}
