import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabs: { title: string, content: string }[] = [];

  ngOnInit() {
      this.tabs = [
          { title: 'Tab 1', content: 'Tab 1 Content' },
          { title: 'Tab 2', content: 'Tab 2 Content' },
          { title: 'Tab 3', content: 'Tab 3 Content' }
      ];
  }

  // scrollable tab
  activeIndex: number = 0;

    scrollableTabs: any[] = Array.from({ length: 30 }, (_, i) => ({ title: "Title", content: "Content" }));

// controlled tab
}

