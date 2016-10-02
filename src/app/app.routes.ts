import { Routes, RouterModule } from '@angular/router';

//import { PaginaComponent } from './pagina/pagina.component';
// Importamos las rutas del componente pagina
import { PaginaRoutes } from './pagina/pagina.routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Cuando se ingrese la url http://localhost:4200 de redirige a la url http://localhost:4200/inicio
    ...PaginaRoutes, // De este modo agregamos nuestro grupo de rutas del componente Pagina a nuestra lista de rutas actuales
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);