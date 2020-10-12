import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { AppService } from 'src/app/service/app/app.service';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
})
export class CreateClientPage implements OnInit {
  documentTypes: any[] = [];
  createClientForm: FormGroup;

  constructor(
    private util: UtilService,
    private service: AppService) {
    this.service.doPost({ action: '/main/getDocumenTypes' })
      .then((responseBody: any) => {
        this.documentTypes = responseBody.list;
      }).catch(err => { });
    this.createClientForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName1: new FormControl('', Validators.required),
      lastName2: new FormControl('', Validators.required),
      docType: new FormControl('', Validators.required),
      docNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      phone: new FormControl(''),
      cellPhone: new FormControl('', [Validators.minLength(10), Validators.required])
    });
  }

  ngOnInit() {
  }

  createClient(client) {
    client.docType = this.getDocTypeObject(client);
    this.service.doPost({ action: '/clients/create', postData: client })
      .then((responseBody: any) => {
        this.util.showAlert('Información', 'El cliente ha sido registrado con exito con el identificador: ' + responseBody.clientID);
        this.createClientForm.reset();
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

}
