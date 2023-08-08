import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  readData: any;
  successmsg: any;
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });
  }

  deleteID(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res, 'deleteres==>');
      this.successmsg = res.message;
    })
  }
}
