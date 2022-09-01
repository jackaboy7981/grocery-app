import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductdetailPageComponent } from './pages/productdetail-page/productdetail-page.component';

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full' },
    {path: 'register', component: RegistrationComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'products/:catid', component:ProductPageComponent},
    {path: 'products/details', component: ProductdetailPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    //{path: '**', component:ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
