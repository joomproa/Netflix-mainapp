import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  countries:any = [];

  forminfo:any = {
    last_name: "Akibu"
  }

  gender2:any = [
    {id: 1, name: "Female"},
    {id: 2, name: "Male"},
    {id: 3, name: "SheMale"}
  ];

  country:any = [];
  states:any = [];



  constructor(private http: HttpClient){}


  ngOnInit(): void {
    this.getcountry();
    this.gecountry();
  }

  gecountry(){
    this.http.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json").subscribe(
      (res:any) => {
        this.countries = res
      },
      (err) => {

      }
    )
  }

  getcountry(){
    Swal.showLoading()
    this.http.get("https://restcountries.com/v3.1/region/Africa").subscribe(
    (res:any) => {
      this.country = res;
      Swal.close()
    },
    (err) => {
      console.log(err)
    }
    )
  }

  getexactstate(selectedcountry:any){
    this.getstates(selectedcountry)
  }

  getstates(selectedcountry:any){
    this.http.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json").subscribe(
    (res:any) => {
      this.states = res.filter((country_code:any) => country_code.country_code == selectedcountry)
      console.log(this.states)
    },
    (err) => {
      console.log(err)
    }
    )
  }


  onChange(event:any){
    this.forminfo.check1 = event
    console.log(event)
  }

  submitstudent(){

    console.log(this.forminfo)

    return

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
