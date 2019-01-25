import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { from } from 'rxjs/internal/observable/from';
import { WhythisComponent } from 'src/app/whythis/whythis.component';
import { LoginComponent } from 'src/app/login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserComponent } from 'src/app/user/user.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AuthorsComponent } from 'src/app/authors/authors.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { PurchagersComponent } from 'src/app/purchagers/purchagers.component';
import { UserprofileComponent } from 'src/app/userprofile/userprofile.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { HistoryComponent } from 'src/app/history/history.component';
import { CourseComponent } from 'src/app/course/course.component';
import { AauthorsComponent } from 'src/app/aauthors/aauthors.component';
import { ClistComponent } from 'src/app/clist/clist.component';
import { JavaComponent } from 'src/app/java/java.component';

const routes: Routes = [{path:'home',component:HomeComponent,
children:[{path:'carousel',component:CarouselComponent},
{path:'home/clist',component:ClistComponent},
{path:'home/clist/login',component:LoginComponent},
{path:'home/clist/login/registration',component:RegistrationComponent},
{path:'home/clist/login/registration/login',component:LoginComponent},
{path:'home/java',component:JavaComponent},
{path:'home/java/login',component:LoginComponent},
{path:'home/java/login/registration',component:RegistrationComponent},
{path:'home/java/login/registration/login',component:LoginComponent},
{path:'whythis',component:WhythisComponent},
{path:'authors',component:AuthorsComponent},
{path:'login',component:LoginComponent},{path:'registration',component:RegistrationComponent}]},
{path:'home/login/registration',component:RegistrationComponent},
{path:'home/registration/login',component:LoginComponent},


{path:'admin',component:AdminComponent,children:[{path:'',component:SubscribersComponent},{path:'subscribers',component:SubscribersComponent},
{path:'purchasers',component:PurchagersComponent},
{path:'course',component:CourseComponent},{path:'aauthors',component:AauthorsComponent}]},

{path:'user',component:UserComponent,children:[{path:'',component:UserprofileComponent},
{path:'cart',component:CartComponent},{path:'history',component:HistoryComponent}]},
{path:'',redirectTo:'home/carousel',pathMatch:'full'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
