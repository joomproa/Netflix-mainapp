import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  forminfo:any = {}

  constructor(private http: HttpClient){}


  ngOnInit(): void {
    
  }

  submitstudent(){

    this.http.post("https://reqres.in/api/users", this.forminfo).subscribe(
      (res:any) => {

        Swal.fire({
          icon: 'success',
          title: 'Hi ' + this.forminfo.first_name + ' ' + this.forminfo.last_name,
          text: "Your info has been submitted successfully",
          showConfirmButton: false,
          timer: 3000
        })

      },
      (err) => {
        console.log("Form failed to submit", err)
      }
    )
  }

}
