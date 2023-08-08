import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  readDataBooks: any[] = [];
  readDataBook2: any[] = [];
  successmsg: any;
  constructor(private service:ApiserviceService){}

  ngOnInit(): void{
    this.service.getAllDataBooks().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBooks = res.data;
    });

    this.service.getAllDataBook2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readDataBook2 = res.data;
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
// getAllDataBook2