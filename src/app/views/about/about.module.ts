import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const aboutRouter: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [ AboutComponent ],
  imports: [CommonModule, RouterModule.forChild(aboutRouter)],
})
export class AboutModule {
  constructor() {
    console.log('about work')
  }
}
