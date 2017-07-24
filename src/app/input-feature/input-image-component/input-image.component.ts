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
      var video = document.getElementById('video');

      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
              video.src = window.URL.createObjectURL(stream);
              video.play();
          });
      }
    })
    .catch(error => console.log(error));
  }

  
  startVideo() {
  }

}
