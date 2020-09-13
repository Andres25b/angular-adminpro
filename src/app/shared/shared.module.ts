import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * MODULOS
import { RouterModule } from '@angular/router';

// * COMPONENTS
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
