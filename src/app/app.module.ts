import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'allUsers', component: AllUserComponent, children: [
      {path: 'postsOfUser', component: UserPostComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
