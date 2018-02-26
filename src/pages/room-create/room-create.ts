import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-create',
  templateUrl: 'room-create.html',
})
export class RoomCreatePage {

  public loads:any[]=[{name:"room",dis:"Room Name"},{name:"first",dis:"1st Load"},{name:"second",dis:"2nd Load"},{name:"third",dis:"3rd Load"},{name:"fourth",dis:"4th Load"},{name:"fifth",dis:"5th Load"}];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomCreatePage');
  }

  save(val){
    console.log(val);
    this.navCtrl.push("BluetoothInitializationPage",{loads:val});
  }

 moreRoom(){
   let i = this.loads.length;
   let ob:any = {
     name:this.numToString(i),
     dis:`${i}th Load`
   }
   console.log(ob);
   this.loads.push(ob);
 }

 numToString(val){
  switch(val){
    case 6:
    return "sixth";
    case 7:
    return "seventh";
    case 8:
    return "eighth";
    case 9:
    return "nineth";
    case 10:
    return "tenth";
    case 11:
    return "eleventh";
    case 12:
    return "twelveth";
    case 13:
    return "thirteenth";
    case 14:
    return "fourteenth";
    case 15:
    return "fifteenth";
    case 16:
    return "sixteenth";
    case 17:
    return "seventeenth";
    case 18:
    return "eighteenth";
    case 19:
    return "nineteenth";
    case 20:
    return "twentyth";
    case 21:
    return "twentyoneth";
    case 22:
    return "twentytwoth";
    case 23:
    return "twentythreeth";
    case 24:
    return "twentyfourth";
    case 25:
    return "twentyfiveth";
    case 26:
    return "twentysixth";
    case 27:
    return "twentyseventh";
    case 28:
    return "twentyeightth";
    case 29:
    return "twentynineth";
    case 30:
    return "thirtyth"; 
  }
 }
 

}
