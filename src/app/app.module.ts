import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/form-data.service';



@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpClientModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent,  AddressComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}