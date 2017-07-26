import { Component, OnInit, OnDestroy } from '@angular/core';
import { InputService } from '../input-service/input.service';
import { NavbarService } from '../../layout/navbar/navbar.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  providers: [InputService]
})

export class InputImageComponent implements OnInit, OnDestroy {

  clicked: boolean;
  photo: any;

  constructor(private navbarService: NavbarService, private InputService: InputService, private router: Router) {
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
    var imageSrc = document.getElementById('photo').getAttribute('src');
    imageSrc = imageSrc.split('base64,')[1];

    this.InputService.getTextFromImage(imageSrc).subscribe(
      results => {
        console.log(results);
        this.router.navigate(['/create/edit', { enteredText: results["Result"] }]);        
      }
    );
  };

}
