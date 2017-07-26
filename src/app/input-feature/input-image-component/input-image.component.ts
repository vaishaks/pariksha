import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavbarService } from '../../layout/navbar/navbar.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})

export class InputImageComponent implements OnInit, OnDestroy {

  clicked: boolean;
  photo: any;

  constructor(private navbarService: NavbarService) {
    this.clicked = false;

    this.photo = document.getElementById('photo');
   }

  ngOnInit() {
      this.navbarService.enableBackButton(true);
      this.navbarService.setPageTitle('Capture');
      // Grab elements, create settings, etc.
      const video1: any = document.getElementById('video');

      // Get access to the camera!
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function(stream) {
              video1.src = window.URL.createObjectURL(stream);
              video1.play();
          });
      }
  };

  ngOnDestroy() {
    this.navbarService.enableBackButton(false);
  };

  capture() {
    this.clicked = true;

    const canvas: any = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const video: any = document.getElementById('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    const data = canvas.toDataURL('image/png');
    document.getElementById('photo').setAttribute('src', data);
  };

  cancelCapture() {
    this.clicked = false;
  };

  submitCapture() {
    const imageSrc = document.getElementById('photo').getAttribute('src');
  };

}
