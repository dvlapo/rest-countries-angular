import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface regions {
  id: number;
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  openFilterOptions: boolean = false;
  regionsList: regions[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Africa' },
    { id: 3, name: 'Americas' },
    { id: 4, name: 'Asia' },
    { id: 5, name: 'Europe' },
    { id: 6, name: 'Oceania' },
  ];

  @Output() filter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleOpenFilterOptions() {
    this.openFilterOptions = !this.openFilterOptions;
  }

  onClickToFilter(region: string) {
    this.filter.emit(region);
  }
}
