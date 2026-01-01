

import { ShoppingCart, Plus, View } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProductCard({product}) {

    const navigate = useNavigate()

    const addToCart = (e) => {
        e.stopPropagation()
        alert("Added to cart!");
    }

    const showProduct = (e) => {
        e.stopPropagation();
        navigate(`/product/${product.id}`); 
    };

    if(!product) return null;

    return (

        // Main Container
        <div 
            className="
                cursor-pointer
                group rounded-xl 
                overflow-hidden 
                shadow-sm hover:shadow-lg 
                transition-all duration-300 
                bg-card 
                w-full 
                flex flex-col 
                relative
                hover:-translate-y-2
            "
            onClick={showProduct}
        >
        
            {/* --- IMAGE SECTION --- */}
            <div className="relative h-48 w-full flex items-center justify-center overflow-hidden">
                <img 
                    src={product.img} 
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
                    alt="Product Image" 
                />
                
                {/* === DESKTOP OVERLAY (Hidden on Mobile) === */}
                <div className="hidden md:flex md:flex-col absolute inset-0 bg-black/40 items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                        className="
                            bg-white text-black 
                            px-4 py-2 rounded-full 
                            font-medium 
                            flex items-center 
                            gap-2 
                            transform 
                            transition-transform
                            hover:scale-105 
                            hover:bg-gray-100
                            hover:cursor-pointer
                            active:scale-95 
                        "
                        onClick={addToCart}
                    >
                        <ShoppingCart size={16} /> Add to Cart
                    </button>

                </div>

            </div>

            {/* --- DETAILS SECTION --- */}
            <div className="p-4 flex flex-col gap-2 bg-navbarBackground">

                {/* Product Name */}
                <h3 className="font-semibold text-lg truncate">{product.title}</h3>

                {/* Product Category */}
                <span className="text-xs text-foreground uppercase tracking-wide">{product.category}</span>
                
                <div className="flex items-center justify-between mt-1">

                    {/* Product Price */}
                    <span className="font-bold text-foreground">${product.price}</span>

                    {/* Product Rating */}
                    <span className="text-sm text-yellow-500">★ {product.rating}</span>
                    
                    {/* + (Add to Cart) button on mobile, Hidden on Desktop */}
                    <button 
                        className="
                            md:hidden absolute bottom-15 right-4 
                            bg-navbarBackground text-foreground
                            p-2 
                            rounded-full shadow-sm shadow-shadow-color
                            active:scale-95 
                            transition-transform
                        "
                        onClick={addToCart}
                    >
                        <Plus size={20} strokeWidth={3} />
                    </button>

                </div>
            </div>

        </div>
        
    );
}

export default ProductCard;