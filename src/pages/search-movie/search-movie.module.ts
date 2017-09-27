import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMoviePage } from './search-movie';

@NgModule({
  declarations: [
    SearchMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMoviePage),
  ],
})
export class SearchMoviePageModule {}
