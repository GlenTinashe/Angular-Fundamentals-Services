import { TitleService } from './title.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title: string;
  constructor (private titleService: TitleService){}

  ngOnInit(){
    setInterval(()=>{
      this.title = this.titleService.title;
    }, 2000)
  }
}
