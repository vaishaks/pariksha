import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  isSearchContainerExpand = false;
  isSearchResultsLoaded = false;
  searchContainerResizeClass = '';
  searchServiceSubscription: Subscription;
  searchResults = [];
  searchText = '';

  onKeyUp = function($event) {
    if ($event.which.toString() === '13') {
      this.searchService.getSearchResults().subscribe(
        results => {
          if (results) {
            this.searchService.setSearchLoaded(true);
          }
          this.searchResults = results;
          console.log(results);
        }
      );
    }
    if (this.searchText === '') {
      this.searchService.setSearchLoaded(false);
    }
  };

  searchContainerResizeClicked = function() {
    this.isSearchContainerExpand = !this.isSearchContainerExpand;
    this.searchContainerResizeClass = this.isSearchContainerExpand ? 'search-container-expand' : 'search-container-collapse';
  };

  constructor(private searchService: SearchService) {
    this.searchServiceSubscription = this.searchService.isSearchResultLoaded$.subscribe(
      isSearchLoaded => {
        this.isSearchResultsLoaded = isSearchLoaded;
      }
    );
  }

  ngOnDestroy() {
    this.searchServiceSubscription.unsubscribe();
  }

}
