import { Component } from '@angular/core';
import { AppThemeModule } from '../../app-theme.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-navs',
  standalone: true,
  imports: [CommonModule, AppThemeModule],
  templateUrl: './side-navs.component.html',
  styleUrl: './side-navs.component.scss'
})
export class SideNavsComponent {

}
