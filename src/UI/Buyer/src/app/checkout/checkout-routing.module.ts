// core services
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// checkout routes
import { CheckoutComponent } from 'src/app/checkout/containers/checkout/checkout.component';
import { CartComponent } from 'src/app/checkout/containers/cart/cart.component';
import { OrderConfirmationComponent } from 'src/app/checkout/containers/order-confirmation/order-confirmation.component';
import { OrderResolve } from 'src/app/order/order.resolve';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'order-confirmation/:orderID',
    component: OrderConfirmationComponent,
    resolve: { orderResolve: OrderResolve },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
