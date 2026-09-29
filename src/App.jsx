import { useState, useEffect } from 'react'
import './App.css'

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <div className="product-icon">{product.icon}</div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <strong>${product.price}</strong>
      <button onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  useEffect(() => {
  document.title = `React Catalog - ${cart.length} items`
}, [cart])

  const products = [
    { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 899, icon: '💻' },
    { id: 2, name: 'Smart Phone', category: 'Electronics', price: 599, icon: '📱' },
    { id: 3, name: 'Headphones', category: 'Accessories', price: 129, icon: '🎧' },
    { id: 4, name: 'Smart Watch', category: 'Accessories', price: 199, icon: '⌚' },
    { id: 5, name: 'Camera', category: 'Electronics', price: 749, icon: '📷' },
    { id: 6, name: 'Gaming Mouse', category: 'Gaming', price: 79, icon: '🖱️' },
  ]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="app">
      <header>
        <div>
          <h1>🛍️ React Catalog</h1>
          <p>Interactive Product Dashboard</p>
        </div>

        <div className="cart">
          🛒 Cart: <strong>{cart.length}</strong>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Explore Our Products</h2>
          <p>Browse products using React state, JSX props and hooks.</p>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        <section className="products">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <p className="empty">No products found.</p>
        )}
      </main>
    </div>
  )
}

export default App