import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


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
  // constructor(){}

  ngOnInit(){
  }
  openImageUploadDialog(): void {
    const fileInput = document.getElementById('imageInput') as HTMLInputElement;
    fileInput.click();
  }
  handleImageUpload(event: Event){
}

// convert image to base64
onFileSelecteds(event: any) {
  const file: File = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e: any) => {
    let base64String: string = e.target.result;
    base64String = base64String.split(',')[1];
    console.log( '',base64String); // You can do whatever you want with the base64 string here
  };

  reader.readAsDataURL(file);
}






// convert an image to blob
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const blob: Blob = new Blob([e.target.result], { type: file.type });
        console.log('Blob:', blob);
        // Additional actions with the blob can go here
      };
      reader.readAsArrayBuffer(file);
    }
  }

  // image crop
  // imageChangedEvent: any = '';
  // croppedImage: string | null = null; // Change to string type

  // constructor(private sanitizer: DomSanitizer) {}

  // fileChangeEvent(event: any): void {
  //   this.imageChangedEvent = event;
  // }

  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImage = event.base64; // Assign event.base64 directly
  //   // event.blob can be used to upload the cropped image
  // }

  // imageLoaded() {
  //   // show cropper
  // }

  // cropperReady() {
  //   // cropper ready
  // }

  // loadImageFailed() {
  //   // show message
  // }


  // multiple images upload
  base64Images: string[] = [];
  exceedMaxImages: boolean = false;
  imageWidth1: string = '10vw';
  imagesListWidth: string = '5vw';
  uploadImagesUpload(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    if (!files || files.length === 0) {
      return;
    }
    const totalImages =  this.base64Images?.length + files.length;
    if (totalImages > 5) {
      this.exceedMaxImages = true;
      // this.openSnackbar('You can only upload up to 5 images.');
      return;
    }
    else {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.convertToBase64(file).then(base64String => {
          this.base64Images.push(base64String);
        });
      }
    }
}
convertToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
}


deleteLocalImage(index:number){
  this.base64Images.splice(index, 1);
}



}

  

