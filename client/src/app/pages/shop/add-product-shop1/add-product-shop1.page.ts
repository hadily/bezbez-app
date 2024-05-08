import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-shop1',
  templateUrl: './add-product-shop1.page.html',
  styleUrls: ['./add-product-shop1.page.scss'],
})
export class AddProductShop1Page implements OnInit {
  constructor() { }

  ngOnInit() {
  }
selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    // Optionally, you can also display a preview of the selected image
    this.previewImage();
  }

  previewImage() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        // Display the preview using the reader.result
        const previewUrl = reader.result as string;
        console.log('Preview URL:', previewUrl);
        // You can store or display this previewUrl in your template
      };
    }
  }
  
  
  

}
