import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Platform } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertProvider } from '../../providers/alert/alert';
import { HomePage } from '../home/home';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  public rooms:string[] = ["Bed Room 1","Bed Room 2","Drawing Room","Kitchen","Dinning Room"];

  public device:any;
  public devices:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetooth:BluetoothSerial,public alert:AlertProvider,private ngZone:NgZone,private loadingCtrl:LoadingController,private platform:Platform) {
  
    platform.ready().then(()=>{
        this.enableBluetooth();
      });
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  create(){
    this.navCtrl.push('RoomCreatePage');
  }

  go(){
    this.navCtrl.push('ControlPage');
  }

  test(){

  }

  enableBluetooth(){
      this.bluetooth.enable().then(()=>{
          console.log("Bluetooth On");
      },()=>{
         this.alert.showAlert("Please turn on the bluetooth");
      })
    }
    

  onSelect(){
    let loader = this.loadingCtrl.create({
        content:"Attempting For BluetoothSerial",
        dismissOnPageChange:true
    });
    loader.present();
    this.bluetooth.connect('20:15:05:21:06:59')    //Actually Id will be taken from Database. Here only id is required
    .subscribe(()=>{
        this.ngZone.run(()=>{
        this.navCtrl.push("TestPage");
        this.alert.showToast("Device Connected");
        })
    },
    ()=>{
    this.ngZone.run(()=>{
        loader.onDidDismiss(()=>{
        this.alert.showAlert("Please connect to a Serial Enabled Microcontroller");
        });
        loader.dismiss();
       })
      })
    }

}
