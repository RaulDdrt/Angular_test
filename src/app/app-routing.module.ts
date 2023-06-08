import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [

  {path: "" , component: HomeComponent},
  {path: "register" , component: RegisterComponent},
  {path: "profile" , component: ProfileComponent},
  {path: "books" , component: BooksComponent},
  {path: "addbook" , component: AddbookComponent},
  {path: "updatebook" , component: UpdateBookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
