import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; // tambahan baru
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
>>>>>>> 6aea6d22a07d72f22c3ce69807bbc025dde968f7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
=======
    HomeComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 6aea6d22a07d72f22c3ce69807bbc025dde968f7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
