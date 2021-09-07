import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  //para navegar a los modulos de las rutas hijas
  //LazyLoad
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  
  }, 
  // rutas lazyload para heroes
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [ AuthGuard],
    canActivate: [AuthGuard]
  },

  {
    path: '404', 
    component: ErrorPageComponent
  }, 
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '404'
  }
]

@NgModule({
  
  imports: [
  RouterModule.forRoot( routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
