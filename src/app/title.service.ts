import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title:string = 'Service'
  constructor() {
    // a promise allows a once off value
    const titlePromise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('New Title')
      }, 3000)
    })
    titlePromise.then((value:string)=>{
      this.title = value
    })
  }

    
}
