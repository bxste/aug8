import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent {
  readDataBook2: any[] = [];
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{

    this.service.getAllDataBook2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2 = res.data;
    });
  }
}
