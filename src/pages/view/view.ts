import { Component ,Input,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage implements OnInit  {
    @Input()
listdata:any;
trailer:SafeResourceUrl;
segment = 'about';
title:any;
overlayHidden: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer : DomSanitizer) {
      this.listdata = navParams.get('listdata');
     console.log(this.listdata);
     this.title = this.listdata.title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
 ngOnInit() {
        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.listdata.trailerlink);
    }

    hideOverlay() {
      this.overlayHidden = true;
  }
  showOverlay() {
    this.overlayHidden = false;
}

}
