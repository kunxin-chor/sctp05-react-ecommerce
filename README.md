Here are the differences between the branch `03-product-card` and the previous branch `02-jsx`:

1. **src/App.jsx**
   ```diff
   + import ProductCard from './ProductCard'
   
   - <div className="card">
   -   <img src="https://picsum.photos/id/20/300/200" className="card-img-top" alt="Product 1"/>
   -   <div className="card-body">
   -     <h5 className="card-title">Product 1</h5>
   -     <p className="card-text">$19.99</p>
   -     <a href="#" className="btn btn-primary">Add to Cart</a>
   -   </div>
   - </div>
   + <ProductCard 
   +   imageUrl="https://picsum.photos/id/1/300/200"
   +   productName="Anvil"
   +   price="$100"
   + />

   - <div className="card">
   -   <img src="https://picsum.photos/id/1/300/200" className="card-img-top" alt="Product 2"/>
   -   <div className="card-body">
   -     <h5 className="card-title">Product 2</h5>
   -     <p className="card-text">$29.99</p>
   -     <a href="#" className="btn btn-primary">Add to Cart</a>
   -   </div>
   - </div>
   + <ProductCard
   +   imageUrl="https://picsum.photos/id/1/300/200"
   +   productName="Tool Bag"
   +   price="$50"
   + />

   - <div className="card">
   -   <img src="https://picsum.photos/id/26/300/200" className="card-img-top" alt="Product 3"/>
   -   <div className="card-body">
   -     <h5 className="card-title">Product 3</h5>
   -     <p className="card-text">$39.99</p>
   -     <a href="#" className="btn btn-primary">Add to Cart</a>
   -   </div>
   - </div>
   + <ProductCard
   +   imageUrl="https://picsum.photos/id/26/300/200"
   +   productName="Hammer"
   +   price="$45"
   + />

   - <div className="card">
   -   <img src="https://picsum.photos/id/96/300/200" className="card-img-top" alt="Product 4"/>
   -   <div className="card-body">
   -     <h5 className="card-title">Product 4</h5>
   -     <p className="card-text">$49.99</p>
   -     <a href="#" className="btn btn-primary">Add to Cart</a>
   -   </div>
   - </div>
   + <ProductCard
   +   imageUrl="https://picsum.photos/id/96/300/200"
   +   productName="Screwdriver"
   +   price="$13"
   + />
   ```

2. **src/ProductCard.jsx** (New File)
   ```diff
   + import React from 'react'

   + export default function ProductCard(props) {
   +   return (
   +     <div className="card">
   +       <img
   +         src={props.imageUrl}
   +         className="card-img-top"
   +         alt={props.productName}
   +       />
   +       <div className="card-body">
   +         <h5 className="card-title">{props.productName}</h5>
   +         <p className="card-text">{props.price}</p>
   +         <a href="#" className="btn btn-success">Add to Cart</a>
   +       </div>
   +     </div>
   +   )
   + }
   ```

These changes reflect the transition from hardcoded product cards to reusable `ProductCard` components.
