import { useState } from "react";
import "../styles/cart.css";

function Cart() {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  // Création state cart avec valeur initiale à 0
  // useState hook qui permet d'ajouter le state local react à des composants fonctions
  // Décomposition du state du cart, en premier la valeur, en second la fonction qui permet de modifier
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <button onClick={() => updateCart(0)}>Vider</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  );
}

export default Cart;
