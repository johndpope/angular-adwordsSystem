import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { AuthGuardService } from '../../guards/auth-guard/auth-guard.service';
import { RegisterUserComponent } from '../../pages/register-user/register-user.component';
import { AccountsComponent } from '../../pages/accounts/accounts.component';
import { AddAccountComponent } from '../../pages/add-account/add-account.component';
import { AccountInfoComponent } from '../../pages/account-info/account-info.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
    { path: 'user', component: UserComponent, canActivate: [AuthGuardService]},
    { path: 'register-user', component: RegisterUserComponent, canActivate: [AuthGuardService]},
    { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuardService]},
    { path: 'ad-account', component: AddAccountComponent, canActivate: [AuthGuardService]},
    { path: 'ad-account/:id', component: AddAccountComponent, canActivate: [AuthGuardService]},
    { path: 'account-info/:id', component: AccountInfoComponent, canActivate: [AuthGuardService]},
];
