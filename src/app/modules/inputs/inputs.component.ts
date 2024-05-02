import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppThemeModule } from '../../app-theme.module';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, AppThemeModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
 
}
