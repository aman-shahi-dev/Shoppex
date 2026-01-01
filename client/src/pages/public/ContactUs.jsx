import { Instagram, Twitter, Mail, Phone } from 'lucide-react';

function ContactUs() {
  return (
    <div className="
      h-full w-full
      overflow-y-auto custom-scrollbar 
      p-4 md:p-6
      flex items-start md:items-center justify-center 
      bg-background
    ">
      
      <div className="
        w-full max-w-5xl 
        flex flex-col md:grid md:grid-cols-2
        justify-around
        gap-8 md:gap-8
        h-fit 
        md:items-end
      ">
            
        {/* --- CONTACT FORM --- */}
        <div className="
            flex-1 
            flex flex-col justify-center
            bg-background
            border border-border
            rounded-2xl 
            p-4 md:p-8
            shadow-xl
            gap-2
        ">

            <div className="shrink-0 text-center md:text-left mb-2">
                <h1 className='
                    text-2xl md:text-3xl font-bold
                    font-wenkai mb-1 
                    text-center text-white 
                    md:underline md:underline-offset-10 md:decoration-cta
                '>
                    Contact Us
                </h1>
                <h2 className='text-xs md:text-base text-white/70 text-center md:mt-6'>
                    Questions? We'll get back to you within 24 hours.
                </h2>
            </div>
            
            <form className="
                flex flex-col 
                gap-3
                px-1 py-1
            ">
                
                {/* NAME */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] md:text-lg font-bold uppercase tracking-wide ml-1 text-white/70">Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className='
                            p-2 md:p-3 rounded-lg
                            bg-cta
                            border border-white/10
                            text-foreground placeholder:text-white/40
                            focus:outline-none focus:ring-1 focus:ring-background
                            text-sm md:text-base transition-colors
                        '
                    />
                </div>
                
                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] md:text-lg font-bold uppercase tracking-wide ml-1 text-white/70">Email</label>
                    <input 
                        type="email" 
                        placeholder="john@example.com"
                        className='
                            p-2 md:p-3 rounded-lg
                            bg-cta
                            border border-white/10
                            text-white placeholder:text-white/40
                            focus:outline-none focus:ring-1 focus:ring-background
                            text-sm md:text-base transition-colors
                        '
                    />
                </div>
                
                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] md:text-lg font-bold uppercase tracking-wide ml-1 text-white/70">Message</label>
                    <textarea 
                        rows={3}
                        placeholder="Type your message..."
                        className='
                            p-2 md:p-3 rounded-lg
                            bg-cta
                            border border-white/10
                            text-white placeholder:text-white/40
                            focus:outline-none focus:ring-1 focus:ring-background
                            resize-none
                            text-sm md:text-base transition-colors
                        '
                    />
                </div>

                <button
                    type='submit'
                    className='
                        shrink-0
                        py-2 md:py-3 px-8 mt-1
                        bg-cta text-white font-bold rounded-lg
                        shadow-lg
                        hover:scale-[1.02] active:scale-95
                        transition-all duration-200
                        cursor-pointer
                        w-fit self-center
                        text-sm md:text-base
                    '
                >
                    Send Message
                </button>
            </form>
        </div>


        {/* --- SOCIALS / INFO --- */}
        <div className="
            shrink-0
            h-fit 
            flex flex-col
        ">

            <div className="
                flex md:flex-col items-center justify-between md:justify-center
                bg-background
                border border-border
                rounded-2xl
                p-4 md:py-12 md:px-8
                
                h-full
                gap-4 md:gap-10
            ">
                
                <h1 className='
                    hidden md:block
                    text-3xl font-wenkai text-white font-bold
                    md:underline md:underline-offset-10 md:decoration-cta
                '>
                    Talk to us
                </h1>
                
                <div className="flex flex-col md:gap-6 items-start md:items-center w-full text-xs md:text-lg">
                    <div className="flex items-center gap-2 md:gap-3 p-1 w-full justify-start md:justify-center text-white">
                        <Phone className="text-rose-200 shrink-0" size={18} />
                        <span className="font-semibold">+91 7891811467</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 p-1 w-full justify-start md:justify-center text-white">
                        <Mail className="text-rose-200 shrink-0" size={18} />
                        <span className="font-semibold">support@shoppex.com</span>
                    </div>
                </div>

                {/* Gradient Social Icons */}
                <div className="flex gap-4 md:gap-6">
                    <a 
                        href="https://www.instagram.com/shoppex._.store/"
                        className="
                            p-2 md:p-3 rounded-full 
                            bg-black/20 dark:bg-black/40 border border-white/10
                            hover:bg-black/40 hover:scale-110 
                            transition-all shadow-md cursor-pointer group
                        "
                    >
                        <svg width="0" height="0">
                            <defs>
                                <radialGradient id="instagram-gradient" cx="30%" cy="110%" r="150%">
                                <stop offset="0%" stopColor="#fdf497" />
                                <stop offset="45%" stopColor="#fd5949" />
                                <stop offset="60%" stopColor="#d6249f" />
                                <stop offset="90%" stopColor="#285AEB" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <Instagram 
                            size={20} 
                            stroke="url(#instagram-gradient)" 
                            strokeWidth={2} 
                            className="md:w-[28px] md:h-[28px]"
                        />
                    </a>

                    <a 
                        href="https://x.com/Shoppex_Store"
                        className="
                            p-2 md:p-3 rounded-full 
                            bg-black/20 dark:bg-black/40 border border-white/10
                            hover:bg-black/40 hover:scale-110 
                            transition-all shadow-md cursor-pointer
                        "
                    >
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient id="twitter-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#62B4E2" />
                                <stop offset="100%" stopColor="#285AEB" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Twitter 
                            size={20} 
                            stroke="url(#twitter-gradient)" 
                            strokeWidth={2} 
                            className="md:w-[28px] md:h-[28px]"
                        />
                    </a>
                </div>

            </div>

        </div>

      </div>

    </div>
  )
}

export default ContactUs