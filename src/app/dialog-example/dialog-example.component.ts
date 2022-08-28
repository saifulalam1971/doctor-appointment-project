import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  form = new FormGroup({
    time: new FormControl()
  });
  submitted=false;
  ngOnInit(): void {
    this.form.patchValue({
      time: new Date().setHours(15)
    })
  }

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
 
  onSubmit() {
    console.log(this.contactForm.value);
    this.submitted=true;
  }
  


}
