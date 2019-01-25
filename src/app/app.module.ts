import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhythisComponent } from './whythis/whythis.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { CourseComponent } from './course/course.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { PurchagersComponent } from './purchagers/purchagers.component';
import { AauthorsComponent } from './aauthors/aauthors.component';
import { AuthorsComponent } from './authors/authors.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
// import {NgxPaginateModule } from 'ngx-paginate' ;
  import { from } from 'rxjs/internal/observable/from';
import { ClistComponent } from './clist/clist.component';
import { JavaComponent } from './java/java.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhythisComponent,
    LoginComponent,
    UserprofileComponent,
    CartComponent,
    HistoryComponent,
    CourseComponent,
    SubscribersComponent,
    PurchagersComponent,
    AauthorsComponent,
    AuthorsComponent,
    CarouselComponent,
    UserComponent,
    AdminComponent,
    RegistrationComponent,
    SearchPipe,
    ClistComponent,
    JavaComponent,
    
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
