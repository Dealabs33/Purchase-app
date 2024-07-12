        const form = document.getElementById('purchase-form');
        const submitBtn = document.getElementById('submit-btn');
        const clearBtn = document.getElementById('clear-btn');
        const purchaseList = document.getElementById('purchase-list');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemName = document.getElementById('item-name').value;
            const price = document.getElementById('price').value;
            const quantity = document.getElementById('quantity').value;
            const totalCost = price * quantity;

            const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
            purchases.push({ itemName, price: `NGN ${price}`, quantity, totalCost: `NGN ${totalCost}`});
            localStorage.setItem('purchases', JSON.stringify(purchases));

            displayPurchases();
        });

        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('purchases');
            purchaseList.innerHTML = '';
        });

        function displayPurchases() {
          const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
            const html = purchases.map((purchase) => {
                return `
                    <div class="purchase-item">
                        <h2> ITEM NAME: ${purchase.itemName}</h2>
                      <p style="color: black"> RESULT:::::</p>
                        <p style="color: white;">Price of Good: ${purchase.price}</p>
                        <p>Quantity of Good: ${purchase.quantity}</p>
                        <p>Total Cost: <span style="color: blue;">${purchase.totalCost}</span></p>
                    </div>
                `;
            }).join('');
            purchaseList.innerHTML = html;
        }

