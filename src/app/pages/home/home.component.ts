import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "This is my Home Page";
  title2 = "mummy";
  totalstudent:any;

  headert = "List of student";
  
  students:any = [];

  constructor(private data: HttpClient){}

  ngOnInit(){
    this.data.get("https://reqres.in/api/users?page=2").subscribe(
      (response:any) => {
        this.students = response.data;
        this.totalstudent = this.students.length;
      }
    )
  }

}


