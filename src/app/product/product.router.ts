import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';

export var router=[
    {
        path:'product',
        component:ProductlistComponent
    },
    {
        path:'productdetails/:id',
        component:ProductdetailsComponent
    },
    {
        path:'cart',
        component: CartComponent
    }
]