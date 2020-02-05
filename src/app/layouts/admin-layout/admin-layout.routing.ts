import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { AuthGuardService } from '../../guards/auth-guard/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService]},
    { path: 'user',           component: UserComponent, canActivate: [AuthGuardService]},
];
