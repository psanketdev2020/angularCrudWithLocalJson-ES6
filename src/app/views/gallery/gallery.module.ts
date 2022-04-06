import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { GalleryitemsComponent } from './galleryitems/galleryitems.component';
import { galleyItems } from 'src/app/appModal/galleryitems';



@NgModule({
  declarations: [
    GalleryComponent,
    Gallery1Component,
    Gallery2Component,
    GalleryitemsComponent,
  ],
  imports: [CommonModule, GalleryRoutingModule],
  providers: [galleyItems],
})
export class GalleryModule {}
