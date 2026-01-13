

function ImageSlider( { images } ) {

    if(!images || images.length !== 5){
        console.warn('ImageSlider expects exactly 5 images to function correctly with the current CSS animation.')
        if(!images || images.length === 0) return null
        // Fallback to just showing the first image if count is wrong, or handle as you see fit
    }

    return (

        // The Container (Window)
        // 'overflow-hidden' masks the parts of the track that are off-screen.
        <div className='
            w-full h-full overflow-hidden rounded-xl shadow-xl relative transform 
        '>

            {/* 2. The Track (Moving part) */}
            {/* 
                - flex: puts images side-by-side.
                - w-[500%]: Track width is 5x the container width to hold 5 images.
                - animate-slider-scroll: The custom v4 utility defined in index.css
            */}
            <div className='
                w-[500%]
                h-[full]
                flex 
                animate-slider-scroll
            '>
                {images.map( (src, index) => (
                    // 3. The Slide
                    // w-1/5: Each image takes up 20% of the track.
                    // shrink-0: Prevents flexbox from squishing the image.
                    <div key={index} className='w-1/5 h-full shrink-0'>
                        <img 
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ) )}
            </div>
            {/* Optional: Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent"></div>

        </div>
    )
}

export default ImageSlider;