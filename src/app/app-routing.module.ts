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
import { UcarouselComponent } from 'src/app/ucarousel/ucarousel.component';
import { HtmlComponent } from 'src/app/html/html.component';
import { CssComponent } from 'src/app/css/css.component';
import { AngularComponent } from 'src/app/angular/angular.component';
import { CcprogComponent } from 'src/app/ccprog/ccprog.component';

const routes: Routes = [{path:'home',component:HomeComponent,
children:[{path:'carousel',component:CarouselComponent},
{path:'whythis',component:WhythisComponent},
{path:'authors',component:AuthorsComponent},
{path:'login',component:LoginComponent},{path:'registration',component:RegistrationComponent}]},
{path:'home/login/registration',component:RegistrationComponent},
{path:'home/registration/login',component:LoginComponent},


{path:'admin',component:AdminComponent,
children:[{path:'',component:CarouselComponent},
{path:'carousel',component:CarouselComponent},
{path:'subscribers',component:SubscribersComponent},
{path:'purchasers',component:PurchagersComponent},
{path:'course',component:CourseComponent},
{path:'aauthors',component:AauthorsComponent}]},

{path:'user',component:UserComponent,
children:[{path:'',component:UcarouselComponent},
{path:'ucarousel',component:UcarouselComponent},
{path:'profile',component:UserprofileComponent},
{path:'cart',component:CartComponent},
{path:'history',component:HistoryComponent},
{path:'ucarousel/java',component:JavaComponent},
{path:'ucarousel/clist',component:ClistComponent},
{path:'ucarousel/html',component:HtmlComponent},
{path:'ucarousel/css',component:CssComponent},
{path:'ucarousel/angular',component:AngularComponent},
{path:'ucarousel/ccprog',component:CcprogComponent},
{path:'java',component:JavaComponent},
{path:'clist',component:ClistComponent},
{path:'html',component:HtmlComponent},
{path:'css',component:CssComponent},
{path:'angular',component:AngularComponent},
{path:'ccprog',component:CcprogComponent}]},
{path:'',redirectTo:'home/carousel',pathMatch:'full'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
