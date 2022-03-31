import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userTheme = '';

  ngOnInit(): void {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  }

  toggleTheme() {
    const activeTheme = localStorage.getItem('user-theme');
    if (activeTheme === 'light-theme') {
      localStorage.setItem('user-theme', 'dark-theme');
      this.userTheme = 'dark-theme';
      document.body.classList.add('dark-theme');
    } else {
      localStorage.setItem('user-theme', 'light-theme');
      this.userTheme = 'light-theme';
      document.body.classList.remove('dark-theme');
    }
  }
  setTheme(theme: string) {
    localStorage.setItem('user-theme', theme);
    this.userTheme = theme;
  }
  getMediaPreference() {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (hasDarkPreference) {
      document.body.classList.add('dark-theme');

      return 'dark-theme';
    } else {
      return 'light-theme';
    }
  }
}
