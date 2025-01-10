import { TDiscounts } from "@/serverTypes/serverTypes";
import Image from "next/image";
import React from "react";
import Container from "../container/Container";
interface IDiscountProps {
  productsDiscount: TDiscounts;
}
export default function Discount({ productsDiscount }: IDiscountProps) {
  return (
    <div>
      <div className="hidden md:block">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-16">
            {productsDiscount?.map((discount) => {
              return (
                <div key={discount.id}>
                  <Image
                    src={discount.image}
                    width={350}
                    height={100}
                    alt="discount"
                    className=""
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="block md:hidden">
        <div className="grid grid-cols-12 md:flex-row items-center justify-between gap-4 my-16">
          {productsDiscount?.map((discount) => {
            return (
              <div className="col-span-12" key={discount.id}>
                <Image
                  src={discount.image}
                  width={800}
                  height={400}
                  layout="responsive"
                  alt="discount"
                  className=" w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
