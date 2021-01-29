import { TitleService } from './../title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-title',
  templateUrl: './change-title.component.html',
  styles: [
  ],
})
export class ChangeTitleComponent implements OnInit {

  constructor(private  titleService: TitleService) { }
  title:string;
  ngOnInit(): void {
    setInterval(()=>{
      this.title = this.titleService.title;
    }, 2000)
  }

  changeTitle(e){
    const newTitle = e.target.value;
    this.titleService.title = newTitle;
  }

}
