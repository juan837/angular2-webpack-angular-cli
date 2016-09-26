import { Routes, RouterModule } from '@angular/router';

import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'inicio', component: PaginaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);
