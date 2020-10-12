import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppComponentsModule } from './components/components.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [AppComponent],
  imports: [ 
    FormsModule,  
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,{
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
