import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderDetailComponent } from './features/orders/order-detail/order-detail.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { SubscriptionPlansComponent } from './features/subscription/plans/plans.component';
import { SellerDashboardComponent } from './features/seller/dashboard/dashboard.component';
import { SellerProductsComponent } from './features/seller/product-management/product-management.component';
import { SellerOrdersComponent } from './features/seller/order-management/order-management.component';
import { SellerAnalyticsComponent } from './features/seller/analytics/analytics.component';
import { AdminDashboardComponent } from './features/admin/dashboard/dashboard.component';
import { UserManagementComponent } from './features/admin/user-management/user-management.component';
import { SellerApprovalComponent } from './features/admin/seller-approval/seller-approval.component';
import { CategoryManagementComponent } from './features/admin/category-management/category-management.component';
import { AdminAnalyticsComponent } from './features/admin/analytics/analytics.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileInfoComponent, canActivate: [AuthGuard] },
  { path: 'premium', component: SubscriptionPlansComponent },
  {
    path: 'seller',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'SELLER' },
    children: [
      { path: 'dashboard', component: SellerDashboardComponent },
      { path: 'products', component: SellerProductsComponent },
      { path: 'orders', component: SellerOrdersComponent },
      { path: 'analytics', component: SellerAnalyticsComponent }
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'sellers', component: SellerApprovalComponent },
      { path: 'categories', component: CategoryManagementComponent },
      { path: 'analytics', component: AdminAnalyticsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
