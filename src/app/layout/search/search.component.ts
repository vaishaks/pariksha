import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isSearchContainerExpand = false;
  searchContainerResizeClass = '';
  searchText = '';

  onKeyUp = function($event) {
    if ($event.code === 'Enter') {
      console.log(this.searchText);
    }
  };

  searchContainerResizeClicked = function() {
    this.isSearchContainerExpand = !this.isSearchContainerExpand;
    this.searchContainerResizeClass = this.isSearchContainerExpand ? 'search-container-expand' : 'search-container-collapse';
  };

  constructor() { }

  ngOnInit() {
  }

}
