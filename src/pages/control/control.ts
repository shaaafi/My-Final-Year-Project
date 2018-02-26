import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertProvider } from '../../providers/alert/alert';
import { HomePage } from '../home/home';

/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-control',
  templateUrl: 'control.html',
})
export class ControlPage {
 
  public device:any;
  public data:any;
  public to:boolean;
  public readings:any;

  //Room object from Database is taken
  public db:any = {       
    room:"Bed Room",
    first:"Light 1",
    second:"Light 2",
    third:"Ac",
    fourth:"Fan 1"
  }

  public dbArray:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetooth:BluetoothSerial,public notification:AlertProvider,private ngZone:NgZone) {
    this.dbArray = this.obToArr(this.db);
    console.log(this.dbArray);
  }
   
  

    //trying
    obToArr(ob){
      let _arr = [];
      for(let x in ob){
        let i = {
          name:ob[x],
          key:x
        }
        _arr.push(i)
      }
      return _arr;
    }

    tap(val){
      console.log(val);
    }
}
