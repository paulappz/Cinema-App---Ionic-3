import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchCinemaPage } from './search-cinema';

@NgModule({
  declarations: [
    SearchCinemaPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchCinemaPage),
  ],
})
export class SearchCinemaPageModule {}
