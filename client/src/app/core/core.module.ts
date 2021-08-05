import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StoriesComponent } from 'src/app/stories/stories.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    StoriesComponent
  ]
})
export class CoreModule { }
