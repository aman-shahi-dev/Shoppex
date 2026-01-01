import { useState } from 'react';
import { X, Filter } from 'lucide-react'; 
import ProductCard from '../../components/Product/ProductCard';
import ProductFilters from '../../components/Product/ProductFilters';
import { ReactLenis } from 'lenis/react';


function Products() {

  const initialProducts = [
  { 
    id: 1, 
    title: "White Crop Top",
    category: 'women',
    rating: 4.5,
    price: 29, 
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
  },
  { 
    id: 2, 
    category: 'hoodie',
    title: "Black Hoodie", 
    rating: 3.9,
    price: 45, 
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
  },
  { 
    id: 3, 
    category: 'shoes',
    title: "Air Jordan High", 
    rating: 4.8,
    price: 120, 
    quantity: 1, 
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0", 
  },
  { 
    id: 4, 
    category: 'jackets',
    title: "Denim Jacket", 
    rating: 2.9,
    price: 65, 
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0", 
  },
  { 
    id: 5, 
    category: 'eyewears',
    title: "Aviator Sunglasses", 
    rating: 3.1,
    price: 150, 
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0", 
  },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="h-[calc(100dvh-4rem)] flex flex-col md:flex-row relative">

        {/* --- MOBILE FILTER BUTTON --- */}
        <div className="md:hidden py-3 px-5 flex items-center justify-end sticky top-0 bg-gray-50/50 border-b border-border backdrop-blur-sm">
            <button 
                onClick={() => setIsDrawerOpen(true)}
                className="
                  flex items-center 
                  gap-2 bg-background 
                  w-fit 
                  px-3 py-1.5 
                  rounded-md 
                  border-border 
                  active:scale-95 
                  transition 
                  duration-100 
                  shadow-[5px_5px_0px_0px_var(--shadow-color)]
                  active:shadow-none 
                  active:translate-x-[5px] 
                  active:translate-y-[5px]
                "
            >
                <Filter size={18} /> Filters
            </button>
        </div>

        {/* --- MOBILE DRAWER --- */}
        <div className={`fixed inset-0 z-50 flex ${isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div 
                className={`fixed inset-0 bg-background/50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'}`} 
                onClick={() => setIsDrawerOpen(false)}
            />
            <div className={`relative w-72 bg-navbarBackground h-full shadow-2xl p-5 transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="absolute top-4 right-4 p-1 active:bg-red-500 rounded-md"
                >
                    <X size={24} />
                </button>
                <div className="mt-8">
                    <ProductFilters />
                </div>
            </div>
          </div>

        {/* --- DESKTOP SIDEBAR --- */}
        <div className='w-64 hidden md:block p-6 overflow-y-auto shrink-0 bg-navbarBackground border-r border-border'>
           <ProductFilters />
        </div>

        {/* --- PRODUCT GRID WITH LENIS --- */}
        <ReactLenis 
            // FIX 2: Added 'pb-20' (Padding Bottom). 
            // This gives extra empty space at the bottom so the last card isn't cut off by the phone screen edge.
            // FIX 3: Changed 'bg-gray-50/50' to 'bg-background' for Dark Mode support.
            className='flex-1 overflow-y-auto p-4 pb-5 bg-background' 
            options={{ duration: 0.3 }}
        >
           <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
             {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
             ))}
           </div>
        </ReactLenis>
        
    </div>
  )
}

export default Products;