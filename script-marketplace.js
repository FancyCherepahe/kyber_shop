const addToCart = (name, price, image, bladeId) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, hiltImage: image, bladeId });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function showOnMarket() {
  const marketContainer = document.getElementById('market-items');
  lightsaberItems.forEach((saber, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item-div';

    const title = document.createElement('h3');
    title.textContent = saber.name;

    const saberDiv = document.createElement('div');
    saberDiv.className = 'item-lightsaber';

    const bladeDiv = document.createElement('div');
    bladeDiv.id = saber.bladeId;

    const hiltImg = document.createElement('img');
    hiltImg.className = 'item-lightsaber-hilt';
    hiltImg.src = 'images/lightsaber-hilt.png';

    saberDiv.appendChild(bladeDiv);
    saberDiv.appendChild(hiltImg);

    const price = document.createElement('p');
    price.textContent = `${saber.price} credits`;

    const infoLink = document.createElement('a');
    infoLink.href = `main-lightsaber-info.html?id=${index}`;
    infoLink.textContent = 'View Details';
    infoLink.className = 'item-buy-button';

    const addButton = document.createElement('button');
    addButton.className = 'marketplace-button-buy-animation marketplace-button';
    addButton.textContent = 'Buy';
    addButton.onclick = function () {
       alert("Sorry, you cannot buy item because you are too far from Coruscant.");
    };

    const addCartButton = document.createElement('button');
    addCartButton.className = 'marketplace-button-add-cart-animation marketplace-button';
    addCartButton.textContent = 'Add to Cart';
    addCartButton.onclick = function () {
      addToCart(saber.name, saber.price, saber.div, saber.bladeId);
    };

    itemDiv.appendChild(title);
    itemDiv.appendChild(saberDiv);
    itemDiv.appendChild(price);
    itemDiv.appendChild(infoLink);
    itemDiv.appendChild(addButton);
    itemDiv.appendChild(addCartButton);
    marketContainer.appendChild(itemDiv);
  });
}
showOnMarket();

