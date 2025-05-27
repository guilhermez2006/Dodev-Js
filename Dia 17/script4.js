class Product {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = parseInt(quantity);
    }

    addQuantity(amount) {
        this.quantity += amount;
    }

    removeQuantity(amount) {
        this.quantity = Math.max(0, this.quantity - amount);
    }

    getInfo() {
        return `${this.name} - Quantidade: ${this.quantity}`;
    }
}

class StockManager {
    constructor() {
        this.products = [];
        this.listElement = document.getElementById('stockList');
    }

    addProduct() {
        const name = document.getElementById('productName').value.trim();
        const qty = document.getElementById('productQty').value.trim();

        if (name === '' || qty === '') {
            alert('Preencha nome e quantidade!');
            return;
        }

        const existingIndex = this.products.findIndex(p => p.name.toLowerCase() === name.toLowerCase());

        if (existingIndex >= 0) {
            this.products[existingIndex].addQuantity(parseInt(qty));
        } else {
            const product = new Product(name, qty);
            this.products.push(product);
        }

        document.getElementById('productName').value = '';
        document.getElementById('productQty').value = '';

        this.render();
    }

    deleteProduct(index) {
        this.products.splice(index, 1);
        this.render();
    }

    removeOne(index) {
        this.products[index].removeQuantity(1);
        if (this.products[index].quantity === 0) {
            this.deleteProduct(index);
        } else {
            this.render();
        }
    }

    render() {
        this.listElement.innerHTML = '';

        this.products.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = product.getInfo();

            const removeBtn = document.createElement('button');
            removeBtn.textContent = ' -1 ';
            removeBtn.onclick = () => this.removeOne(index);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remover Produto';
            deleteBtn.onclick = () => this.deleteProduct(index);

            li.appendChild(removeBtn);
            li.appendChild(deleteBtn);
            this.listElement.appendChild(li);
        });
    }
}

const stockManager = new StockManager();