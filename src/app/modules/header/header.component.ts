import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppThemeModule } from '../../app-theme.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppThemeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
