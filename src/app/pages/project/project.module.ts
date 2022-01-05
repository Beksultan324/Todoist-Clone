import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { GreetingSnackbarModule } from '@shared/components/greeting-snackbar/greeting-snackbar.module';
import { ProjectNotFoundComponent } from './components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from '@features/button/button.module';
import { ShowOnBreakpointModule } from '@shared/directives';
import { TooltipModule } from '@features/tooltip';
import { DisplayTodosMenuComponent } from './components/display-todos-menu/display-todos-menu.component';

@NgModule({
  declarations: [ProjectComponent, ProjectNotFoundComponent, DisplayTodosMenuComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    GreetingSnackbarModule,
    AngularSvgIconModule,
    ButtonModule,
    ShowOnBreakpointModule,
    TooltipModule,
  ],
})
export class ProjectModule {}
