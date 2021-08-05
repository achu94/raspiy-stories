import { Component, Input } from '@angular/core';
import { IStorie } from '../shared/interfaces';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent<T> {

  @Input() index!: number;
  @Input() items: T[] | undefined;
  
  stories: IStorie[] | undefined;

  constructor(private storiesService: StoriesService) { 
    this.fetchStories();
  }

  fetchStories(): void {
    this.stories = undefined;
    this.storiesService.loadStories().subscribe((stories) => {
      this.stories = stories;
    });
  }

}
