function addToCart(name, price, hiltImage, bladeId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, hiltImage, bladeId });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;

    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'item-div';

      const title = document.createElement('h3');
      title.textContent = item.name;

      const saberDiv = document.createElement('div');
      saberDiv.className = 'item-lightsaber';

      const bladeDiv = document.createElement('div');
      bladeDiv.id = item.bladeId;

      const hiltImg = document.createElement('img');
      hiltImg.className = 'item-lightsaber-hilt';
      hiltImg.src = item.hiltImage;

      saberDiv.appendChild(bladeDiv);
      saberDiv.appendChild(hiltImg);

      const price = document.createElement('p');
      price.textContent = `${item.price} credits`;

      itemDiv.appendChild(title);
      itemDiv.appendChild(saberDiv);
      itemDiv.appendChild(price);

      cartContainer.appendChild(itemDiv);
      total += item.price;
    });

    document.getElementById('total').textContent = `Total: ${total} credits`;

function clearCart() {
  localStorage.removeItem('cart');
  location.reload();
}

function buyAll() {
  if (localStorage.getItem('cart') === null) {
    alert('Your cart is empty.');
    return;
  }
  else{
    alert('Sorry, you cannot buy item because you are too far from Coruscant.');
  }
}

function buyOneItem(){
  alert('Sorry, you cannot buy item because you are too far from Coruscant.');
}
