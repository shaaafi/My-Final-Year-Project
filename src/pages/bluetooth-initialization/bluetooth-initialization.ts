import { Component,NgZone } from '@angular/core';
import { IonicPage,NavController,LoadingController,Platform,NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the BluetoothInitializationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetooth-initialization',
  templateUrl: 'bluetooth-initialization.html',
})
export class BluetoothInitializationPage {

  public devices:any;
  public loads:any = {};
 
  constructor(public navCtrl: NavController, public bluetooth:BluetoothSerial,public alert:AlertProvider,private ngZone:NgZone,private loadingCtrl:LoadingController,private platform:Platform, private navParams:NavParams) {
    
     platform.ready().then(()=>{
        this.enableBluetooth();
      });

      this.loads = navParams.get('loads');
      this.loads.test = "testing!!!";
      console.log(this.loads);
  }
  
  ionViewDidEnter() {
  
  }
  
  enableBluetooth(){
    this.bluetooth.enable().then(()=>{
      this.bluetooth.list().then(res=>{
      this.ngZone.run(()=>{
      this.devices = res
      });
      })
    },()=>{
      this.alert.showAlert("Please turn on the bluetooth");
    })
  }


onSelect(device:any){
  let loader = this.loadingCtrl.create({
  content:"Attempting For BluetoothSerial",
  dismissOnPageChange:true
  });
  loader.present();
  this.bluetooth.connect(device.id)
  .subscribe(()=>{
      this.ngZone.run(()=>{
          this.loads.name = device.name;
          this.loads.id = device.id;
          this.navCtrl.push("RoomPage");            //Look here, Load may be transferred to RoomPage.. Take care
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
