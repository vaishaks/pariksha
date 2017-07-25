import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  isSearchContainerExpand = false;
  searchContainerResizeClass = '';
  searchText = '';

  onKeyUp = function($event) {
    if ($event.code === 'Enter') {
      console.log(this.searchText);
      this.searchService.getSearchResults().subscribe(
        results => {
          console.log(results);
        }
      );
    }
  };

  searchContainerResizeClicked = function() {
    this.isSearchContainerExpand = !this.isSearchContainerExpand;
    this.searchContainerResizeClass = this.isSearchContainerExpand ? 'search-container-expand' : 'search-container-collapse';
  };

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
