import { Component } from '@angular/core';
<<<<<<< HEAD
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 //import halaman dialog yang sudah dibuat pada tahap sebelumnya
import {TambahAlamatComponent} from './tambah-alamat/tambah-alamat.component';
import {DetailAlamatComponent} from './detail-alamat/detail-alamat.component';
import {DialogKonfirmasiComponent} from './dialog-konfirmasi/dialog-konfirmasi.component';
import {ApiService} from './api.service'; //kode tambahan


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(
  public dialog:MatDialog,//menambahkan variabel dialog
  public api:ApiService 
  ){
  	this.getData(); //kode tambahan
  }
  //fungsi untuk menampilkan dialog penambahan alamat baru

dataAlamat:any=[];
  getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataAlamat=res;
    })
  }

  buatAlamat()
  {
		const dialogRef = this.dialog.open(TambahAlamatComponent, {
			width: '450px',  
			data:null   
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getData();      
		});
  	}


detailAlamat(item)
	  {
	    const dialogRef = this.dialog.open(DetailAlamatComponent, {
	      width: '450px',     
	      data:item 
	    });	
	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');     
	    });
	  }

editAlamat(data)
  {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getData();    
    });
  }
	  
konfirmasiHapus(id)
 {
		const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
				console.log('Menghapus data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
        })
      }   
    });
  }
  }
=======

@Component({
  selector: 'app-root',
  templateUrl: './praktikum129.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'tekweb1800016129';
}
>>>>>>> 6aea6d22a07d72f22c3ce69807bbc025dde968f7