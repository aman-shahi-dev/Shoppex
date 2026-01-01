import { useState } from 'react';
import { ChevronLeft, ShoppingBag, ChevronUp, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItem';

const initialProducts = [
  { 
    id: 1, 
    title: "White Crop Top", 
    price: 29, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Soft cotton blend with a relaxed fit." 
  },
  { 
    id: 2, 
    title: "Black Hoodie", 
    price: 45, 
    quantity: 2, 
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Heavyweight fleece, perfect for winter." 
  },
  { 
    id: 3, 
    title: "Air Jordan High", 
    price: 120, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Classic high-top sneakers in red and white." 
  },
  { 
    id: 4, 
    title: "Denim Jacket", 
    price: 65, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Vintage wash denim with copper buttons." 
  },
  { 
    id: 5, 
    title: "Aviator Sunglasses", 
    price: 150, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Gold frame with UV400 protection lenses." 
  },
];

function Cart() {
  
  const [products, setProducts] = useState(initialProducts);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // --- LOGIC FUNCTIONS ---
  const increaseQuantity = (id) => {
    setProducts(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(prev => prev.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeItem = (id) => {
    setProducts(prev => prev.filter(item => item.id !== id));
  };

  // --- CALCULATIONS ---
  const subtotal = products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : products.length > 0 ? 10 : 0; 
  const taxRate = 0.08; 
  const tax = subtotal * taxRate;
  const discount = 0; 
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="
      flex md:flex-row flex-col flex-1 gap-2 p-2 
      h-full 
      overflow-hidden
      relative
    ">

      {/* --- OVERLAY BACKDROP (Mobile Only) --- */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
          ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* --- LEFT SIDE: Product List --- */}
      <div className='
        md:border md:border-border rounded 
        md:w-[80%] flex-1
        px-2 md:py-1
        flex flex-col gap-2
        min-h-0
        pb-24 md:pb-0
        bg-background
      '>

        {/* Header */}
        <div className="flex gap-5 py-2 md:py-1 border-b-2 border-border items-center justify-center shrink-0">
          <Link 
            className="md:hidden border border-border active:scale-95 active:bg-red-600 rounded px-1 py-1 flex items-center justify-center fixed left-5 z-10"
            to='/products'
          >
            <ChevronLeft />
          </Link>
          
          <h1 className="text-xl md:text-3xl font-wenkai ">
            Shopping Cart ({products.length})
          </h1>
        </div>

        {/* The Product List */}
        <div className="
          p-2 
          flex-1 
          overflow-y-auto 
          flex flex-col gap-3
          custom-scrollbar
        ">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem 
                id={product.id}
                key={product.id}
                title={product.title}
                image={product.img}
                description={product.desc}
                price={product.price}
                quantity={product.quantity}
                onIncrease={() => increaseQuantity(product.id)}
                onDecrease={() => decreaseQuantity(product.id)}
                onRemove={() => removeItem(product.id)}
              />
            ))
          ) : (
            <div className='flex flex-col items-center justify-center h-full gap-4 text-muted-foreground'>
              <ShoppingBag size={64} className="opacity-20" />
              <p>Your cart is empty.</p>
              <Link to="/products" className='text-cta hover:underline'>Start Shopping</Link>
            </div>
          )}
        </div>

      </div>

      {/* --- RIGHT SIDE: Bill Summary (Responsive Drawer) --- */}
      <div className={`
        bg-background md:bg-background/90
        border-t md:border border-border 
        flex flex-col gap-4
        
        fixed md:static 
        bottom-0 left-0 right-0 
        z-50 
        rounded-t-2xl md:rounded-lg
        p-5 md:p-4
        shadow-[0_-5px_20px_rgba(0,0,0,0.3)] md:shadow-none
        transition-transform duration-300 ease-in-out
        
        ${isDrawerOpen ? 'translate-y-0' : 'translate-y-[100%] md:translate-y-0'}

        md:w-[350px]
        md:shrink-0
        md:h-auto
        max-h-[85vh] md:max-h-full
        overflow-y-auto
      `}>
        
        {/* Mobile Handle */}
        <div className="md:hidden w-full flex justify-center mb-2" onClick={() => setIsDrawerOpen(false)}>
            <div className="w-12 h-1.5 bg-muted rounded-full cursor-pointer"></div>
        </div>

        <div className="flex justify-between items-center border-b border-border pb-2">
            <h1 className="text-2xl font-wenkai">Order Summary</h1>
            {/* Mobile Close X */}
            <button onClick={() => setIsDrawerOpen(false)} className="md:hidden p-1">
                <X />
            </button>
        </div>

        {/* Bill Details */}
        <div className='flex flex-col gap-3 text-sm md:text-base'>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Subtotal</span>
            <span className='font-semibold'>${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Shipping</span>
            <span className='font-semibold'>
                {shipping === 0  ? <span className="text-green-500">Free</span> : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='text-muted-foreground'>Estimated Tax</span>
            <span className='font-semibold'>${tax.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className='flex justify-between text-green-500'>
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        {/* Total & Checkout */}
        <div className='border-t border-border pt-4 mt-auto md:mt-4'>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-xl font-bold'>Total</span>
            <span className='text-2xl font-bold text-foreground'>${total.toFixed(2)}</span>
          </div>
          
          <button 
            className='
              w-full py-3 
              bg-cta text-white font-bold rounded-lg
              shadow-xl cursor-pointer
              hover:scale-105 active:scale-95 
              transition-all duration-300
            '
            disabled={products.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      {/* --- MOBILE STICKY FOOTER --- */}
      <div className={`
        md:hidden fixed bottom-0 left-0 right-0 
        bg-card
        border-t border-border 
        p-4 z-40
        flex items-center justify-between
        transition-transform duration-300
        ${isDrawerOpen ? 'translate-y-full' : 'translate-y-0'} 
      `}>
         <div 
            className="flex flex-col cursor-pointer" 
            onClick={() => setIsDrawerOpen(true)}
         >
             <span className="text-sm text-muted-foreground flex items-center gap-1">
                Total <ChevronUp size={14} />
             </span>
             <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
         </div>

         <button 
            className='
              px-8 py-2.5
              bg-cta text-white font-bold rounded-lg
              shadow-xl cursor-pointer
              hover:scale-105 active:scale-95 
              transition-all duration-300
              border border-border
            '
            onClick={() => setIsDrawerOpen(true)}
            disabled={products.length === 0}
          >
            Checkout
         </button>
      </div>

    </div>
  )
}

export default Cart;