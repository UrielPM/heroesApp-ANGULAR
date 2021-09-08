import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';

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
    path: 'login', 
    component: LoginComponent
  }, 
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: 'login'
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
