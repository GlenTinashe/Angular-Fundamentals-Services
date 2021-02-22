import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title:string = 'Service'
  constructor() {
   const number = interval(1000).subscribe(number=>{
     this.title = `${number}`
   })
  }

    
}
