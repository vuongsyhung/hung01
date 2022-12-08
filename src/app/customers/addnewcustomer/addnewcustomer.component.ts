import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addnewcustomer',
  templateUrl: './addnewcustomer.component.html',
  styleUrls: ['./addnewcustomer.component.css']
})
export class AddnewcustomerComponent {

  public errors: any;
  public respo: any;

  signupForm = this.fb.group({
    customerEmail: ['',  Validators.required],
    customerName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private sv: AuthService) { }

  onSubmit() {
    const abc = this.signupForm.value;
    if(abc.customerEmail && abc.customerName){
      console.log(abc);
       this.sv.signupNetCore(abc.customerEmail, abc.customerName) .subscribe({
        next: (res) => {
          console.log(res);
          this.respo = res;
        },
        error: (error) => {
          console.log(error);
        },
        complete: ()=> console.log('Doi tan trong vay dup')
       } );
    }
    this.signupForm.reset();
  }
}
