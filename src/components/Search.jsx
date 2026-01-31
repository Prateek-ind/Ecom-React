import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./Product/ProductCard";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = ({ setSearchOpen }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector((state) => state.product.allProducts);
  const searchRef = useRef();

  const filterProducts = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (!searchInput.trim()) {
        setFilteredProducts([]);
      } else {
        setFilteredProducts(filterProducts());
      }
    }, 1000);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchInput]);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const closeSearch = useCallback(()=>{
    setSearchOpen(false)
  })

  return (
    <div
      ref={searchRef}
      className="absolute w-full max-h-fit top-28 left-0 flex flex-col object-contain"
    >
      <div className="w-full px-4  flex items-center bg-white border border-gray-300">
        <input
          type="text"
          placeholder="Search here..."
          value={searchInput}
          onChange={handleChange}
          className="w-full py-4 outline-none border-none"
        />
        <button onClick={() => setSearchOpen(false)}>
          {" "}
          <IoCloseOutline size={32} />
        </button>
      </div>

      {filteredProducts.length > 0 && (
        <div className="bg-white ">
          <hr className="mt-8" />
          <p className="py-4 px-4 text-gray-700">Products</p>
          <ul className="flex overflow-y-auto max-h-96 px-4 py-4">
            {filteredProducts.map((product) => (
              <li key={product.id} className="px-2">
                <div className="w-48 text-gray-900">
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    state={product}
                  >
                    <ProductCard product={product} closeSearch={closeSearch} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
