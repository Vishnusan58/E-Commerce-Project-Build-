import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductFilterComponent } from './features/products/product-filter/product-filter.component';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderDetailComponent } from './features/orders/order-detail/order-detail.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { AddressManagementComponent } from './features/profile/address-management/address-management.component';
import { SubscriptionPlansComponent } from './features/subscription/plans/plans.component';
import { SubscriptionManageComponent } from './features/subscription/manage/manage.component';
import { ReviewFormComponent } from './features/reviews/review-form/review-form.component';
import { ReviewListComponent } from './features/reviews/review-list/review-list.component';
import { SellerDashboardComponent } from './features/seller/dashboard/dashboard.component';
import { SellerProductsComponent } from './features/seller/product-management/product-management.component';
import { SellerOrdersComponent } from './features/seller/order-management/order-management.component';
import { SellerAnalyticsComponent } from './features/seller/analytics/analytics.component';
import { AdminDashboardComponent } from './features/admin/dashboard/dashboard.component';
import { UserManagementComponent } from './features/admin/user-management/user-management.component';
import { SellerApprovalComponent } from './features/admin/seller-approval/seller-approval.component';
import { CategoryManagementComponent } from './features/admin/category-management/category-management.component';
import { AdminAnalyticsComponent } from './features/admin/analytics/analytics.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ToastNotificationComponent } from './shared/components/toast-notification/toast-notification.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { CurrencyPipe } from './shared/pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    OrderListComponent,
    OrderDetailComponent,
    ProfileInfoComponent,
    AddressManagementComponent,
    SubscriptionPlansComponent,
    SubscriptionManageComponent,
    ReviewFormComponent,
    ReviewListComponent,
    SellerDashboardComponent,
    SellerProductsComponent,
    SellerOrdersComponent,
    SellerAnalyticsComponent,
    AdminDashboardComponent,
    UserManagementComponent,
    SellerApprovalComponent,
    CategoryManagementComponent,
    AdminAnalyticsComponent,
    ProductCardComponent,
    StarRatingComponent,
    LoadingSpinnerComponent,
    ToastNotificationComponent,
    NotFoundComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
