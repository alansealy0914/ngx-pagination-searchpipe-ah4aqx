import{ NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [{
  path: '',
  component: AppComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],

  exports: [RouterModule]
})

export class AppRoutingModule {

}
