import { Lusitana } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
const uuid = uuidv4();
import { Metadata } from "next";
import ProductCard from "../../ui/products/productCard";

export const metadata: Metadata = {
  title: "Products",
};

export interface CardProps {
  cardId: string;
  cardImage: string;
  price: number;
  description: string;
}

const cartCards: CardProps[] = [
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
  {
    cardId: uuid,
    cardImage: "/product-placeholder-image.png",
    price: 345.00,
    description: "Lorem Ipsum dolo mite",
  },
];

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ProductPage() {
  return (
    
    <section>
      <h2
        className={`${lusitana.className} text-2xl pb-5 text-center md:text-3xl md:text-left`}
      >
        Product Page
      </h2>
      <div className = "flex flex-wrap">
      {cartCards.map((card) => {
        return (
            <ProductCard key={ card.cardId } {...card}/>
        );
      })}
      </div>
    </section>
  );
}
