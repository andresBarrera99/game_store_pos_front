import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app/app.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilService } from 'src/app/service/util/util.service';
import { ParametersService } from 'src/app/service/parameters/parameters.service';

@Component({
  selector: 'app-create-rent',
  templateUrl: './create-rent.page.html',
  styleUrls: ['./create-rent.page.scss'],
})
export class CreateRentPage implements OnInit {
  createRentForm: FormGroup;
  documentTypes: any[] = [];
  products: any[] = [];
  selectedProducts: any[] = [];
  client: any;

  constructor(
    private util: UtilService,
    private parameters: ParametersService,
    private service: AppService) {
      this.service.doPost({ action: '/main/getDocumenTypes' })
      .then((responseBody: any) => {
        this.documentTypes = responseBody.list;
      }).catch(err => { });
    this.createRentForm = new FormGroup({
      clientDocType: new FormControl('', Validators.required),
      clientDocNumber: new FormControl('', Validators.required),
      productName: new FormControl(''),
      untilDate: new FormControl('', Validators.required),
      totalValue: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  searchClient() {
    const localClient ={
      docType:this.getDocTypeObject(this.createRentForm.controls['clientDocType'].value),
      docNumber:this.createRentForm.controls['clientDocNumber'].value
    }
    this.service.doPost({ action: '/clients/search', postData: localClient })
    .then((responseBody: any) => {
      this.client = responseBody;
    }).catch(err => { });
  }

  searchProducts() {
    const localProduct ={
      name:this.createRentForm.controls['productName'].value
    }
    this.service.doPost({ action: '/products/search', postData: localProduct })
    .then((responseBody: any) => {
      this.products = responseBody.list;
    }).catch(err => { });
  }
  onProductClick(product){
    this.selectedProducts.push(product);
    this.products= [];
    let actualValue = +this.createRentForm.controls['totalValue'].value;
    actualValue = actualValue + product.price;
    this.createRentForm.controls['productName'].patchValue('');
    this.createRentForm.controls['totalValue'].patchValue(actualValue);
  }

  onSelectedProductClick(product){
    this.selectedProducts.forEach( (element,index) => {
      if(element === product) this.selectedProducts.splice(index,1);
    });
    let actualValue = +this.createRentForm.controls['totalValue'].value;
    actualValue = actualValue - product.price;
    this.createRentForm.controls['productName'].patchValue('');
    this.createRentForm.controls['totalValue'].patchValue(actualValue);
  }

  getDocTypeObject(docTypeId){
    let docTypeLocal: any;
    this.documentTypes.forEach(documentType => {
      if( documentType.id == docTypeId){
        docTypeLocal = documentType;
      }
    });
    return docTypeLocal;
  }

  createRent(rentFormValues){
    if(this.client){
      const rent = this.getRent(rentFormValues);
      console.log(rent);
      this.service.doPost({ action: '/rents/create', postData: rent })
      .then((responseBody: any) => {
        this.util.showSimpleMessage('Información', 'La venta ha sido registrada con éxito');
        this.clearForm();
      }).catch(err => { });
    }else{
      this.util.showSimpleMessage('Error', 'Debe seleccionar un cliente');
    }
    
  }

  getRent(rentFormValues: any) {
    let localRent = {
      client: this.client,
      user : JSON.parse(this.parameters.getUserLogin()),
      totalValue : rentFormValues.totalValue,
      rentalDate : new Date(),
      rentalDateFinish : rentFormValues.untilDate,
      products: this.selectedProducts
    }
    return localRent;
  }

  clearForm() {
    this.createRentForm.reset();
    this.client = undefined;
    this.selectedProducts = [];
  }

}
