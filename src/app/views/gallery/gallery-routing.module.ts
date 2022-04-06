import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { Gallery1Component } from './gallery1/gallery1.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { GalleryitemsComponent } from './galleryitems/galleryitems.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'gallery1', component: Gallery1Component },
  { path: 'gallery2', component: Gallery2Component },
  { path: '/:id', component: GalleryitemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
