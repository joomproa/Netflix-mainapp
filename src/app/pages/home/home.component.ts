import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
  teacher:any = [];
  errormsg:any;

  randominfo:any;

  constructor(private ismail: HttpClient){}

  ngOnInit(){
    Swal.fire({
      title: 'Laoding Student...',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    this.getstudent();
  }

  getstudent(){
    this.ismail.get("https://reqres.in/api/users").subscribe(
      (response:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Proccess Complete',
          text: "Student loaded successfully",
          showConfirmButton: false,
          timer: 1500
        })
        this.students = response.data;
        this.totalstudent = this.students.length;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
      }
    )
  }

 



}


