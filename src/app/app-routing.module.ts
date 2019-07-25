import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { ConverterComponent } from './components/converter/converter.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/converter',
        pathMatch: 'full',
    },
    { path: 'converter', component: ConverterComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
