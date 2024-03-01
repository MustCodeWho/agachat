import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { ChatzoneComponent } from './chatzone/chatzone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { HomeComponent } from './home/home.component';

const appRoute : Routes = [
  { path : "" , component:  HomeComponent },
  { path : "new-chat/:id" , component:  ChatComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SidebarComponent,
    ChatzoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
