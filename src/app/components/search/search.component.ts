import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query = '';

  @Output() search = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(searchQuery: string) {
    this.search.emit(searchQuery);
  }
}
