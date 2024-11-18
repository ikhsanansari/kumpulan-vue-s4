<template>
  <q-page>
    <q-card class="product-card" v-for="product in products" :key="product.id">
      <q-card-section>
        <div class="product-image">
          <img :src="product.image" alt="Product Image">
        </div>
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <p class="price">$ {{ product.price }}</p>
          <q-btn @click="addToCart(product)" color="primary" dense>Add to Cart</q-btn>
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <h2>Cart</h2>
        <q-list bordered>
          <q-item v-for="item in cart" :key="item.id">
            <q-item-section>{{ item.name }}</q-item-section>
            <q-item-section side>{{ item.price }}</q-item-section>
            <q-item-section side>Quantity: {{ item.quantity }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 15, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 20, image: 'https://via.placeholder.com/150' }
      ],
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      let cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        });
      }
    }
  }
};
</script>

<style scoped>
.product-card {
  display: flex;
  margin-bottom: 20px;
}

.product-image {
  flex: 0 0 auto;
  margin-right: 20px;
}

.product-details {
  flex: 1 1 auto;
}

.price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
