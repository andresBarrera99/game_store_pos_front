import { Injectable } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { AlertController,LoadingController,ToastController} from '@ionic/angular';
import { resolve } from 'dns';
import { ParametersService } from 'src/app/service/parameters/parameters.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private loadingElement : any;
  private loadingdElements = 0;

  constructor(
    router : Router,
    private alertController : AlertController,
    private toastController: ToastController,
    private loadingController : LoadingController,
    public parameters : ParametersService
  ) { 
    router.events.subscribe();
  }

  

  public async showAlert(title,text,okText='OK',okHandler=null,cancelText=null,cancelHandler=null){
    const options = {header: title, message : text, buttons: [{text:okText, handler : okHandler}]};
    if(cancelText){
      options.buttons.push({text: cancelText, handler:cancelHandler});
    }
    const alert = await this.alertController.create(options);
    return alert.present();
  }

  public async showToast(text, position:'top' | 'bottom' | 'middle' = 'middle',duration = 5000){
    const options = {message : text, duration : duration, position: position};
    const toast = await this.toastController.create(options);
    return toast.present();
  }

  public async dismissLoading() {
    this.loadingdElements = this.loadingdElements - 1;
    if(this.loadingElement && this.loadingdElements === 0){ //si habia un elemnto cargando, se cierra
      const loading = this.loadingElement;
      this.loadingElement = null;
      return loading.dismiss();
    }else{  //En caso de que haya más de un elemento cargando, se suelve la peticion en una promesa
      return new Promise((resolve) => {resolve()});
    }
  }
  public async showLoading() {
    this.loadingdElements = this.loadingdElements + 1;
    if(this.loadingdElements === 1){ //si no hay elementos crgando, se muestra el alert
      let msgWait = 'Cargando ...'
        this.loadingElement = await this.loadingController.create({
          spinner : "crescent",
          message : msgWait
        });
        return this.loadingElement.present();
    }else{ //En caso de que haya un elemento cargando, se suelve la peticion en una promesa
      return new Promise((resolve) => {resolve()});
    }
    
  }

  public setCustomError(formControl,msgError){
    formControl['customMessage'] = msgError;
    formControl.setErrors({custom : true});
    formControl.markAsTouched({onlySelf: true});
  }

  public async showSimpleMessage(title, msg) {
    if(msg.length > 0){
      const alert = await this.alertController.create({
        header : title,
        message : msg,
        buttons : ['ok']
      });
      return alert.present();
    }
  }
}
