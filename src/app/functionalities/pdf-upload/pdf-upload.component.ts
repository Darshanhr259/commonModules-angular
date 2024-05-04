import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrl: './pdf-upload.component.scss'
})
export class PdfUploadComponent {
  previewUrl: string | ArrayBuffer | null = null;
  isImage: boolean = false;
  isVideo: boolean = false;
  imageUrl: string | ArrayBuffer | null | undefined;
  imageUploaded!: boolean;

 


  constructor(){}
 
  

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.previewFile(file);
    }
  }

  previewFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
      this.isImage = file.type.startsWith('image');
      this.isVideo = file.type.startsWith('video');
    };
    reader.readAsDataURL(file);
  }
  // File into base64 
  onFileSelectedBase64(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.convertToBase64(selectedFile);
    }
  }
  
  
  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64String = reader.result as string;
      // Remove the prefix "data:" from the base64 string
      base64String = base64String.split(',')[1];
      console.log('', base64String);
      // You can use the base64String as needed (e.g., send it to server)
    };
    reader.onerror = (error) => {
      console.error('Error converting file to base64:', error);
    };
  }
  
  // File into Blob
  
  
  
    // Function to handle file selection
    onFileSelectedBlob(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        this.convertFileToBlob(file);
      }
    }
  
    // Function to convert file to Blob
    convertFileToBlob(file: File) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        if (reader.result) {
          const blob = new Blob([reader.result], { type: file.type });
          // You can now use the 'blob' object as needed, for example, upload to server.
          console.log('', blob);
        } else {
          console.error('Error: FileReader result is null.');
        }
      };
      reader.onerror = (error) => {
        console.error('Error converting file to blob:', error);
      };
    }
 
   
    onDragOver(event: DragEvent) {
      event.preventDefault();
    }
  
    onDrop(event: DragEvent) {
      event.preventDefault();
      const files = event.dataTransfer?.files;
      if (files && files.length > 0) {
        const imageFile = files[0];
        if (imageFile.type.startsWith('image')) {
          this.previewImage(imageFile);
        } else {
          console.error('Unsupported file type. Please drop an image file.');
        }
      }
    }
  
    previewImage(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  
    deleteUploadedImage() {
      this.imageUrl = null;
    }
}

