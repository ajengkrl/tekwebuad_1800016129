import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tambah-alamat',
  templateUrl: './tambah-alamat.component.html',
  styleUrls: ['./tambah-alamat.component.css']
})
export class TambahAlamatComponent implements OnInit {
  constructor(public api:ApiService, public dialogRef:MatDialogRef<TambahAlamatComponent>) { }
  data:any={};
  
  ngOnInit() {}  
  simpan(data)
  {
    if(data.id == undefined)
    {
      this.api.simpan(data).subscribe(res=>{
        this.dialogRef.close(true);
      });
    }else{
      this.api.ubah(data).subscribe(res=>{
        this.dialogRef.close(true);
      })
    }
  }
}