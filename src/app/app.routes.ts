import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'Inicio', component: LoginComponent }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule { }
