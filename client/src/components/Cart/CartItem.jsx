import { Minus, Plus, Trash2, X } from 'lucide-react';

import { useNavigate } from 'react-router-dom'

function CartItem({ 
  id,
  image, 
  title, 
  description, 
  price, 
  quantity, 
  onIncrease, 
  onDecrease, 
  onRemove 
}) {

  const navigate = useNavigate()

  return (
    <div className='
      group
      flex items-start 
      gap-3 md:gap-6 
      p-3 
      border border-border rounded-xl 
      bg-transparent 
      shadow-sm
      shrink-0
      transition-colors
      hover:bg-white/5
    '>

      {/* 1. IMAGE */}
      <div className='
        relative 
        shrink-0 
        w-20 h-20 md:w-32 md:h-32 
        overflow-hidden rounded-lg border border-border
      '>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-full object-cover hover:scale-120 hover:cursor-pointer transition duration-100'
          onClick={() => navigate(`/product/${id}`)}
        />
      </div>

      {/* 2. MIDDLE CONTENT */}
      <div className='flex flex-col flex-1 min-w-0 h-full justify-between'>
        
        {/* Top: Title + Delete */}
        <div className="flex justify-between items-start gap-1">
          <div className="flex flex-col gap-0.5">
             <h3 className="font-bold text-sm md:text-lg leading-tight truncate pr-2">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
              {description}
            </p>
          </div>
          
          <button 
            onClick={onRemove} 
            className="
                md:hidden shrink-0 cursor-pointer
                text-muted-foreground hover:text-red-500 active:text-red-600 
                p-1 rounded active:bg-white/10 transition-colors
            "
          >
             <X size={16} />
          </button>
        </div>

        {/* Bottom (Mobile Only) */}
        <div className="flex md:hidden items-center justify-between mt-3">
            <p className="font-bold text-sm">${price}</p>
            
            {/* Mobile Quantity Control */}
            <div className='
                flex items-center gap-2
                border border-border rounded px-2 py-1 
                bg-transparent
            '>
                <button 
                  onClick={onDecrease} 
                  disabled={quantity <= 1} 
                  className="
                    cursor-pointer disabled:cursor-not-allowed
                    p-1 rounded
                    active:bg-white/20 active:scale-95 transition-all
                    hover:bg-white/10
                    disabled:opacity-30
                  "
                >
                    <Minus size={14} />
                </button>
                
                <span className="text-sm font-medium w-4 text-center tabular-nums">{quantity}</span>
                
                <button 
                  onClick={onIncrease} 
                  className="
                    cursor-pointer
                    p-1 rounded
                    active:bg-white/20 active:scale-95 transition-all
                    hover:bg-white/10
                  "
                >
                    <Plus size={14} />
                </button>
            </div>
        </div>

        {/* Desktop Price */}
        <div className="hidden md:flex items-center mt-auto">
             <p className="font-bold text-xl">${price}</p>
        </div>

      </div>

      {/* 3. RIGHT CONTROLS (Desktop) */}
      <div className='hidden md:flex flex-col items-end justify-between h-32 py-1'>
        
        <button 
          onClick={onRemove}
          className="
            cursor-pointer
            text-muted-foreground hover:text-red-600 
            p-2 rounded-lg 
            hover:bg-red-500/10 active:bg-red-500/20 
            transition-all
          "
        >
          <Trash2 size={20} />
        </button>

        {/* Desktop Quantity Control */}
        <div className='
            flex items-center gap-3 
            rounded-lg p-1 
            border border-border 
            bg-transparent
        '>
          <button 
            onClick={onDecrease}
            disabled={quantity <= 1}
            className='
                cursor-pointer disabled:cursor-not-allowed
                p-2 rounded-md 
                hover:bg-white/10 active:bg-white/20 active:scale-95
                disabled:opacity-30 
                transition-all
            '
          >
            <Minus size={16} />
          </button>
          
          <span className="font-medium text-base w-6 text-center tabular-nums">
            {quantity}
          </span>
          
          <button 
            onClick={onIncrease}
            className='
                cursor-pointer
                p-2 rounded-md 
                hover:bg-white/10 active:bg-white/20 active:scale-95
                transition-all
            '
          >
            <Plus size={16} />
          </button>
        </div>

      </div>

    </div>
  )
}

export default CartItem;