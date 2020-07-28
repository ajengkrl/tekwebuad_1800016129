import { Component, OnInit } from '@angular/core';
import { DetailListComponent } from 'src/app/detail-list/detail-list.component';
import { MatDialogActions, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  detailList() {
    const dialogRef = this.dialog.open(DetailListComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}
}
