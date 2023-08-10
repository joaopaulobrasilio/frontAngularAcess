import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   formlogin! :FormGroup

    constructor(private  formBuilder : FormBuilder,
      private service: LoginService, private router : Router){


    }


  ngOnInit(){
    this.formlogin = this.formBuilder.group({
      login: [null],
      password:[null]
  })

  }

  onSubmit(){
    this.service.postLogin(this.formlogin.value).subscribe(
      (resp)=>{
        console.log(resp)
        sessionStorage.setItem('token',resp.token)
       this.router.navigate(['acessos'])
      }
    )

   console.log(this.formlogin.value)
  }


}

