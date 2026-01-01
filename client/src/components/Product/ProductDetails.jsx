
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Minus, Plus, ChevronLeft, Share2 } from 'lucide-react';

const products = [
  { 
    id: 1, 
    title: "White Crop Top", 
    price: 29, 
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop", 
    desc: "Crafted from premium organic cotton, this white crop top offers a breathable fit perfect for summer days." 
  },
  { 
    id: 2, 
    title: "Black Hoodie", 
    price: 45, 
    rating: 4.8,
    reviews: 85,
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop", 
    desc: "Your new go-to hoodie. Made with heavyweight fleece to keep you warm, featuring a double-lined hood." 
  },
  { 
    id: 3, 
    title: "Air Jordan High", 
    price: 120, 
    rating: 4.9,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop", 
    desc: "Iconic high-top sneakers featuring genuine leather upper and air-sole unit for cushioning." 
  },
  { 
    id: 4,
    title: "Denim Jacket", 
    price: 65, 
    rating: 4.7,
    reviews: 156,
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "A timeless classic featuring vintage wash denim, durable copper buttons, and a relaxed silhouette for effortless layering." 
  },
  { 
    id: 5, 
    title: "Aviator Sunglasses", 
    price: 150, 
    rating: 4.6,
    reviews: 94,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0", 
    desc: "Sleek gold-tone frames paired with premium UV400 lenses to protect your eyes while adding a sophisticated touch." 
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="h-screen flex items-center justify-center text-white">Not Found</div>;
  }

  return (
    <div className="
      w-full h-full
      p-4
      md:overflow-hidden
      overflow-y-auto 
      custom-scrollbar
    ">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-2 mb-4 text-white/60 hover:text-white transition-colors group px-1"
      >
        <ChevronLeft className="group-hover:-translate-x-1 transition-transform group-hover:cursor-pointer" /> Back
      </button>

      <div className="
        w-full h-[93%] 
        flex flex-col md:flex-row 
        gap-6 md:gap-10
        items-start
        md:overflow-y-hidden
        p-2
      ">

        {/* --- LEFT: IMAGE SECTION --- */}
        <div className="
            w-full md:w-[50%] 
            md:flex-1 h-full
            flex flex-col gap-4 gap-4 
        ">
            
            <div className="
                relative w-full
                aspect-square md:h-[100%] md:aspect-auto
                rounded-3xl overflow-hidden 
                bg-black/20 border border-white/10 shadow-2xl
            ">
                <div className="h-[10%] absolute -inset-1 bg-gradient-to-tr from-cta/40 to-purple-600/40 rounded-2xl blur opacity-20"></div>
                <img 
                    src={product.img} 
                    alt={product.title} 
                    className="relative w-full h-full object-cover"
                />
            </div>

            {/* Thumbnails */}
            <div className="
                grid grid-cols-4 gap-3
                md:h-auto md:flex-1
            ">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square rounded-xl overflow-hidden bg-black/20 border border-white/10 cursor-pointer hover:border-cta transition-colors">
                        <img src={product.img} className="w-full h-full object-cover opacity-70 hover:opacity-100" />
                    </div>
                ))}
            </div>
        </div>


        {/* --- RIGHT: DETAILS SECTION --- */}
        <div className="

            w-full md:w-[50%] md:h-fit 
            flex flex-col justify-between            
            p-6 md:p-4
        ">
            
            {/* Top Content */}
            <div className="flex flex-col gap-4">
                
                <div className="w-full flex justify-between items-start">
                    <h1 className="text-2xl md:text-3xl font-wenkai text-white leading-tight break-words max-w-[85%]">
                        {product.title}
                    </h1>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-cta hover:cursor-pointer hover:scale-105 active:scale-95 transition-colors text-white/60">
                        <Share2 size={20} />
                    </button>
                </div>
                
                <div className="flex items-center gap-3 text-sm md:text-base">
                    <div className="flex items-center text-yellow-400 gap-1">
                        <Star fill="currentColor" size={18} />
                        <span className="font-bold text-white ml-1">{product.rating}</span>
                    </div>
                    <span className="text-white/40">|</span>
                    <span className="text-white/60">{product.reviews} reviews</span>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">${product.price}</span>
                    <span className="text-lg text-white/40 line-through decoration-white/90">${(product.price * 1.2).toFixed(0)}</span>
                    <span className="text-xs font-bold bg-cta/20 text-white px-3 py-1 rounded-full border border-cta/30">20% OFF</span>
                </div>

                <p className="text-white/80 leading-relaxed text-sm md:text-md">
                    {product.desc}
                </p>
                
                <div className="h-px w-full bg-white/60"></div>
            </div>


            {/* Bottom Actions */}
            <div className="flex flex-col gap-4 py-4 items-start">
                
                {/* Action Row */}
                <div className="flex items-stretch gap-3 w-full h-14 md:h-16">
                    
                    {/* Quantity - 25% width */}
                    <div className="gap-4 flex items-center justify-between bg-black/30 rounded-xl border border-white/10 px-2 md:px-4">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="hover:cursor-pointer p-1 md:p-2 hover:bg-white/10 rounded-lg text-white" disabled={quantity <= 1}>
                            <Minus size={14} />
                        </button>
                        <span className="font-bold text-white text-lg">{quantity}</span>
                        <button onClick={() => setQuantity(q => q + 1)} className="hover:cursor-pointer p-1 md:p-2 hover:bg-white/10 rounded-lg text-white">
                            <Plus size={14} />
                        </button>
                    </div>

                    {/* Wishlist - Square-ish */}
                    <button className="md:w-fit px-6 md:px-6 hover:cursor-pointer hover:scale-110 active:scale-95 flex items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 group ">
                        <Heart size={18} className="group-hover:text-cta group-hover:fill-cta transition-colors" />
                    </button>

                </div>

                {/* Add to Cart - Fills rest */}
                    <button className="
                        w-fit
                        bg-cta text-white font-bold text-base md:text-xl rounded-xl
                        shadow-lg hover:shadow-cta/20 hover:scale-105 active:scale-95 transition-all
                        flex items-center justify-center gap-3
                        whitespace-nowrap p-4
                        hover:cursor-pointer
                    ">
                        <ShoppingCart size={20} />
                        <span className="text-sm md:text-lg">Add to Cart</span>
                        <span className='text-sm md:text-lg'>- ${(product.price * quantity).toFixed(2)}</span>
                </button>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-cta rounded-xl py-1 px-2 border border-white/5 ">
                        <span className="block text-white/40 text-[10px] uppercase tracking-wider">Delivery</span>
                        <span className="text-white font-medium text-sm">2-4 Days</span>
                    </div>
                    <div className="bg-cta rounded-xl px-2 py-1 flex items-center flex-col border border-white/5">
                        <span className="block text-white/40 text-sm uppercase tracking-wider">Returns</span>
                        <span className="text-white font-medium text-sm">30 Days Free</span>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails;