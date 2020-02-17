import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from 'src/app/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UpperPipe } from 'src/app/upper.pipe';
import { HighlightDirective } from 'src/app/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UpperPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}