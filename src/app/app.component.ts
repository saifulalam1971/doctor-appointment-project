import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doctor-Appointment-Calendar';
  constructor(public dialog: MatDialog){}
  openDialog(){
    console.log("ctg");
    this.dialog.open(DialogExampleComponent);
  }
}
