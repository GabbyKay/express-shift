// // CartPage.jsx

// import React, { useContext } from 'react';
// import { CartContext } from '../../contexts/CartContext';
// import styles from './CartPage.module.css';

// function CartPage() {
//   const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

//   return (
//     <div className={styles.container}>
//       <h1>Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <div>Your cart is empty</div>
//       ) : (
//         <>
//           <ul className={styles.cartList}>
//             {cartItems.map(item => (
//               <li key={item.id}>
//                 <div className={styles.itemInfo}>
//                   <img src={item.image} alt={item.title} />
//                   <div>
//                     <div>{item.title}</div>
//                     <div>Quantity: {item.quantity}</div>
//                     <div>Price: ${item.price.toFixed(2)}</div>
//                   </div>
//                 </div>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <div className={styles.totalPrice}>
//             <span>Total Price:</span> ${totalPrice.toFixed(2)}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartPage;
