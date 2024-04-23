import { Component } from '@angular/core';
import { AppThemeModule } from '../../app-theme.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, AppThemeModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
