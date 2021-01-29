import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title:string = 'Service'
  constructor() {
    const titlePromise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve("new Title")
      }, 3000)
    })
    titlePromise.then((value:string)=>{
      this.title = value;
    })
    }

    
}
