import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from '../../pages/register-user/register-user.component';
import { AccountsComponent } from '../../pages/accounts/accounts.component';
import { AddAccountComponent } from '../../pages/add-account/add-account.component';
import { AccountInfoComponent } from '../../pages/account-info/account-info.component';
import { UsersComponent } from '../../pages/users/users.component';
import { SyncComponent } from 'app/pages/sync/sync.component';
import { AccountAlertComponent } from 'app/pages/account-alert/account-alert.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTreeModule,
  MatStepperModule,
  MatCheckboxModule

} from '@angular/material';
import { CategoryPipe } from 'app/api-services/api-service/category.pipe';
import { ReasonComponent } from 'app/pages/reason/reason.component';
import { NgxStarsModule } from 'ngx-stars';
import { RatingComponent } from 'app/pages/rating/rating.component';
import { ProfilesListingComponent } from 'app/pages/profiles-listing/profiles-listing.component';
import { ClientListingComponent } from 'app/pages/client-listing/client-listing.component';
import { ProjectListingComponent } from 'app/pages/project-listing/project-listing.component';
import { ProjectInfoComponent } from 'app/pages/project-listing/project-info/project-info.component';
import { SetupaccInfoComponent } from 'app/pages/setup-accounts-listing/setupacc-info/setupacc-info.component';
import { SetupAccountsListingComponent } from 'app/pages/setup-accounts-listing/setup-accounts-listing.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    NgxStarsModule,
    MatStepperModule,
    MatCheckboxModule
    // DebounceDirective

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    RegisterUserComponent,
    AccountsComponent,
    AddAccountComponent,
    AccountInfoComponent,
    UsersComponent,
    SyncComponent,
    AccountAlertComponent,
    CategoryPipe,
    ReasonComponent,
    RatingComponent,
    ProfilesListingComponent,
    ClientListingComponent,
    ProjectListingComponent,
    ProjectInfoComponent,
    SetupaccInfoComponent,
    SetupAccountsListingComponent




  ],
  providers: []
})

export class AdminLayoutModule { }
