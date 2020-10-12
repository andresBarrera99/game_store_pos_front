import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app/app.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  searchProductForm: FormGroup;
  updateProductForm: FormGroup;
  products: any[] = [];
  product: any;

  constructor(
    private util: UtilService,
    private service: AppService) {
    this.searchProductForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.updateProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  searchProduct(product) {
    this.service.doPost({ action: '/products/search', postData: product })
    .then((responseBody: any) => {
      this.products = responseBody.list;
    }).catch(err => { });
  }

  onProductClick(product){
    this.product = product;
    this.updateProductForm.patchValue({
      name: product.name,
      anio: product.anio,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
    });
  }

  updateProduct(product){
    product = this.setValues(product);
    this.service.doPost({ action: '/products/update', postData: product })
      .then(() => {
        this.util.showSimpleMessage('Información', 'El produto ha sido actualizado con exito');
        this.clearForm();
      }).catch(() => { });
    
  }
  setValues(product: any): any {
    product.id = this.product.id;
    product.name = product.name ? product.name : this.product.name;
    product.anio = product.anio ? product.anio : this.product.anio;
    product.description = product.description ? product.description : this.product.description;
    product.quantity = product.quantity ? product.quantity : this.product.brand;
    product.price = product.price ? product.price : this.product.price;
    product.technology =  this.product.technology;
    return product;
  }


  clearForm() {
    this.searchProductForm.reset();
    this.updateProductForm.reset();
    this.products = [];
    this.product = undefined;
  }

}
