import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectCardsComponent } from './home-page/project-cards/project-cards.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  // {path:'',component:ToDoListComponent},
  {path:'to_do_list',component:ToDoListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectCardsComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
