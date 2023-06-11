import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { NewpipePipe } from './pipes/newpipe.pipe';
import { CardComponent } from './component/cards/cards.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    
  
    HeaderComponent,
            FooterComponent,
            HomeComponent,
            FormRegisterComponent,
            RegisterComponent,
            ProfileComponent,
            BooksComponent,
            NewpipePipe,
            CardComponent,
            AddbookComponent,
            UpdateBookComponent,
            LoginComponent,
            FormLoginComponent,
            
            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
