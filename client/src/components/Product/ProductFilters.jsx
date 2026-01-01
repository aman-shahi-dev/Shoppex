
const ProductFilters = () => {
  return (
    <div className="space-y-5">
       <h3 className="font-bold text-lg mb-4 text-center">Filters</h3>
       
       {/* Filters go here... */}
       <div className=" flex items-center flex-col">

          {/* Category */}
          <h4 className="font-medium mb-2">Category</h4>
          <span className="flex items-center justify-end w-15 gap-2">
            <label htmlFor="">Men</label>
            <input type="checkbox" />
          </span>
          <span className="flex items-center justify-end w-15 gap-2">
            <label htmlFor="">Women</label>
            <input type="checkbox" />
          </span>

          {/* Availability */}
          <h4 className="font-medium mb-2">
            Category
          </h4>
          {/* ... inputs ... */}
          <span className="flex items-center justify-end w-15 gap-2">
            <label htmlFor="">Men</label>
            <input type="checkbox" />
          </span>
          <span className="flex items-center justify-end w-15 gap-2">
            <label htmlFor="">Women</label>
            <input type="checkbox" />
          </span>

       </div>
    </div>
  );
};

export default ProductFilters;