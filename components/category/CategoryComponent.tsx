import { ICategory, TCategories } from "@/serverTypes/serverTypes";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Container from "../container/Container";

interface TCategory {
  category: TCategories;
}

export default function CategoryComponent({ category }: TCategory) {
  const params = useParams();
  console.log(params);
  const getCat = params?.category || "";
  console.log(getCat);
  return (
    <Container>
      <div
        className={`flex flex-wrap gap-4 justify-between ${
          getCat === "store" ? "my-20" : "my-10"
        } `}
      >
        {category.map((item: ICategory) => {
          const normalizedTitle = item.title
            .trim()
            .replace(/-/g, "")
            .toLowerCase();
          console.log(normalizedTitle);
          let linkPath = `/${normalizedTitle}`;
          if (normalizedTitle === "مردانه") {
            linkPath = "/men";
          } else if (normalizedTitle === "زنانه") {
            linkPath = "/women";
          } else if (normalizedTitle === "بچه گانه") {
            linkPath = "/kids";
          }
          return item.isComingSoon ? (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 font-bold cursor-not-allowed opacity-50"
            >
              <div className="w-16 md:w-24">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  width={100}
                  height={100}
                  alt={item.title || "به زودی"}
                  className="rounded-md overflow-hidden w-16  md:w-24"
                />
                <h3 className="text-center mt-2 text-xs md:text-base">
                  {item.title || "به زودی"}
                </h3>
                <span className="text-sm block text-center text-red-500">
                  به زودی
                </span>
              </div>
            </div>
          ) : (
            <Link
              key={item.id}
              href={`/store/${getCat}${linkPath}`}
              className="flex flex-col items-center gap-2 font-bold cursor-pointer"
            >
              <div className="w-16 md:w-24">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  width={100}
                  height={100}
                  alt={item.title || "بدون عنوان"}
                  className="rounded-md overflow-hidden  w-16  md:w-24"
                />
                <h2 className="text-center mt-2 text-xs md:text-base">
                  {item.title || "نامشخص"}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
