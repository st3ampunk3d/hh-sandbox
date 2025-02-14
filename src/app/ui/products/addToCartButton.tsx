"use client";

import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlice";

import { Product } from "@/app/lib/interface";
import Link from "next/link";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <>
      <Link href={"/"}>
        <button
          onClick={handleAddToCart}
          className="bg-green-800 m-3 w-80 text-2xl rounded-lg p-3 flex justify-center items-center md:hover:bg-green-700 text-sky-100 md:w-[200px] lg:w-[270px]"
        >
          Add to Cart
        </button>
      </Link>
    </>
  );
}
