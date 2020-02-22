import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  randomPhotoUrl: string;

  constructor(private photo: PhotoService) {
    this.fetchRandomPhoto();
  }

  onButtonClick() {
    this.fetchRandomPhoto();
  }

  fetchRandomPhoto() {
    this.photo.getRandomPhoto().subscribe((response) => {
      this.randomPhotoUrl = response.urls.regular;
    });
  }
}
