import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { AppService } from 'src/app/service/app/app.service';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  brands: any[] = [];
  technologies: any[] = [];
  selectedTechnologies: any[] = [];
  createProductForm: FormGroup;

  constructor(
    private util : UtilService,
    private service: AppService) {
    this.service.doPost({ action: '/main/getBrands' })
      .then((responseBody: any) => {
        this.brands = responseBody.list;
      }).catch(err => { });
      this.service.doPost({ action: '/main/getTechnologies' })
      .then((responseBody: any) => {
        this.technologies = responseBody.list;
      }).catch(err => { });
    this.createProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      technology: new FormControl(''),
      quantity: new FormControl('')
    });
  }

  ngOnInit() {
  }

  createProduct(product) {
    product.brand = this.getBrandObject(product);
    product.technologies = this.selectedTechnologies;
    this.service.doPost({ action: '/products/create', postData: product })
      .then((responseBody: any) => {
        this.util.showAlert('Información', 'El producto ha sido registrado con exito con el identificador: ' + responseBody.id);
        this.cleanForm();
      }).catch(err => { });
  }
  cleanForm() {
    this.createProductForm.reset();
    this.selectedTechnologies = [];
  }

  getBrandObject(product){
    let brandLocal: any;
    this.brands.forEach(brand => {
      if( brand.id == product.brand){
        brandLocal = brand;
      }
    });
    return brandLocal;
  }

  getTechObject(technology){
    let techLocal: any;
    this.technologies.forEach(tech => {
      if( tech.id == technology){
        techLocal = tech;
      }
    });
    return techLocal;
  }

  addTechnology(){
    const technology ={
      technology: this.getTechObject(this.createProductForm.controls['technology'].value),
      quantity:this.createProductForm.controls['quantity'].value
    }
    this.selectedTechnologies.push(technology);
    this.createProductForm.controls['technology'].patchValue('');
    this.createProductForm.controls['quantity'].patchValue('');
  }

  onSelectedTechnologyClick(technology){
    this.selectedTechnologies.forEach( (element,index) => {
      if(element === technology) this.selectedTechnologies.splice(index,1);
    });
  }
}
