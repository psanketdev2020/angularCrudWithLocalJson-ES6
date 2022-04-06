import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomePreloadService } from './appServices/custome-preload.service';
import { HomeComponent } from './views/home/home.component';
import { PromiseComponent } from './views/promise/promise.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./views/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'gallery',
    data: { preload: true },
    loadChildren: () =>
      import('./views/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'users',
    data: { preload: true },
    loadChildren: () =>
      import('./views/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'promise',
    component: PromiseComponent
  }
];

@NgModule({
  // for preloading techniques add { preloadingStrategy: PreloadAllModules} object after routes but in that method we load all modules
  // custome preloading: using custome preloading we only preload the specific big size modules
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(routes, { preloadingStrategy: CustomePreloadService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
