import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ConverterComponent } from './components/converter/converter.component';

@NgModule({
    declarations: [AppComponent, ConverterComponent],
    imports: [BrowserModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
