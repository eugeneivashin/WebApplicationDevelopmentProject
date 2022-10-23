import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search/:keyword', component: PostListComponent},
  {path: 'posts/:id', component: PostViewComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'login', component: PostViewComponent},
  {path: 'users/:id', component: ProfileComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
    SearchComponent,
    ProfileComponent,
    PostEditComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }