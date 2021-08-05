import { Component, Input, OnInit } from '@angular/core';
import { IStorie } from 'src/app/shared/interfaces';
import { StoriesService } from 'src/app/stories.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent<T> {

}
