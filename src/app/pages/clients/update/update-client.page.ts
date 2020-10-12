import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app/app.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.page.html',
  styleUrls: ['./update-client.page.scss'],
})
export class UpdatePage implements OnInit {
  searchClientForm: FormGroup;
  updateClientForm: FormGroup;
  documentTypes: any[] = [];
  client: any;

  constructor(
    private util: UtilService,
    private service: AppService) {
    this.service.doPost({ action: '/main/getDocumenTypes' })
      .then((responseBody: any) => {
        this.documentTypes = responseBody.list;
      }).catch(err => { });
    this.searchClientForm = new FormGroup({
      docType: new FormControl('', Validators.required),
      docNumber: new FormControl('', Validators.required)
    });
    this.updateClientForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName1: new FormControl('', Validators.required),
      lastName2: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      phone: new FormControl(''),
      cellPhone: new FormControl('', [Validators.minLength(10), Validators.required])
    });
    this.updateClientForm.disable();
  }
  ngOnInit() {
  }

  updateClient(updatedClient) {
    updatedClient.docType = this.client.docType;
    updatedClient.docNumber = this.client.docNumber;
    this.service.doPost({ action: '/clients/update', postData: updatedClient })
      .then(() => {
        this.util.showSimpleMessage('Información', 'El cliente ha sido actualizado con exito');
        this.clearForm();
      }).catch(() => { });
  }

  searchClient(client) {
    client.docType = this.getDocTypeObject(client);
    this.service.doPost({ action: '/clients/search', postData: client })
    .then((responseBody: any) => {
      this.client = responseBody;
      this.setValues();
      this.updateClientForm.enable();
      this.searchClientForm.disable();
    }).catch(err => { });
  }

  getDocTypeObject(client){
    let docTypeLocal: any;
    this.documentTypes.forEach(documentType => {
      if( documentType.id == client.docType){
        docTypeLocal = documentType;
      }
    });
    return docTypeLocal;
  }

  
  setValues(){
    this.updateClientForm.patchValue({
      name: this.client.name,
      lastName1: this.client.lastName1,
      lastName2: this.client.lastName2,
      address: this.client.address,
      age: this.client.age,
      phone: this.client.phone,
      cellPhone: this.client.cellPhone
    })
  }

  clearForm() {
    this.searchClientForm.enable();
    this.searchClientForm.reset();
    this.updateClientForm.reset();
    this.updateClientForm.disable();
    this.client = undefined;
  }
}
