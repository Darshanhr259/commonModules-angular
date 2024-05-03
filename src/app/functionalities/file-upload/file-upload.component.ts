import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  addImageForm = new FormGroup({
    firstImage : new FormControl('')
  })
  imageWidth: string = '10vw';
  constructor(){}

  ngOnInit(){
  }
  openImageUploadDialog(): void {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    fileInput.click();
  }
  handleImageUpload(event: Event){

  }
}
