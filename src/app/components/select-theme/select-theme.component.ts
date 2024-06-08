import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.scss']
})
export class SelectThemeComponent {

  constructor(private themeService: ThemeService) { }

  setTheme(theme: 'light-theme' | 'dark-theme' | 'custom-theme') {
    this.themeService.setTheme(theme);
  }

}
