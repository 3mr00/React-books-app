import React, { useEffect, useState } from "react";
import "./BooksList.css";
import Book from "../Book/Book";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";
const BooksList = () => {
  const [products, setProducts] = useState([]);

  const dataProducts = useSelector((state) => state.products);

  useEffect(() => {
    setProducts(dataProducts);
  }, [dataProducts]);

  return (
    <>
      <div className="parentBookDiv">
        <div className="title">
          <h1 className="text-left pl-20 text-3xl font-extrabold text-neutral-800 pb-10">
            Popular Now
          </h1>
          <a
            href="#"
            className="text-xl font-medium pb-10 mt-[0.5%] mr-[6%] text-gray-400"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-6 gap-6 px-20">
          <Book />
        </div>
        {products.length >= 1 ? <Paginate /> : null}
      </div>
    </>
  );
};

export default BooksList;
