import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppThemeModule } from '../../app-theme.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, AppThemeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
