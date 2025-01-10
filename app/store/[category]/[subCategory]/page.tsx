"use client";
import { getBrands, getProducts } from "@/services/api";
import { IBrands, IBrandsResponse, IProduct } from "@/serverTypes/serverTypes";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ProductsPage from "@/components/productsPageComponent/ProductsPageComponent";

export default function Products() {
  const params = useParams();
  const categoryParams = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const subParams = Array.isArray(params.subCategory)
    ? params.subCategory[0]
    : params.subCategory;
  console.log(categoryParams);
  console.log(subParams);

  const decodedCatParams = decodeURIComponent(categoryParams || "");
  const decodedSubParams = decodeURIComponent(subParams || "");
  console.log(decodedCatParams);
  console.log(decodedSubParams);
  // const decodedParamsBrand = decodeURIComponent(params.brand);

  const getCatParams = Array.isArray(categoryParams)
    ? categoryParams[0]
    : categoryParams;
  console.log(getCatParams);
  const getSubCat = Array.isArray(subParams) ? subParams[0] : subParams;
  const decodedParams = decodeURIComponent(getSubCat);
  console.log(decodedParams);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [brand, setBrand] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchData = useCallback(async () => {
    try {
      if (decodedCatParams === "brands") {
        const brandsResponse: IBrandsResponse = await getBrands();
        console.log(brandsResponse);
        const combined = Object.values(brandsResponse).flat();
        console.log(combined);
        const targetBrand = combined.find(
          (item: IBrands) => item.title === decodedParams
        );
        if (targetBrand) {
          setBrand(targetBrand?.products || []);
        }
        console.log(targetBrand);
      } else {
        const productsResponse = await getProducts();
        // console.log(productsResponse);

        const getProduct = productsResponse[getCatParams][decodedParams];
        console.log(getProduct);
        if (getProduct && getProduct.length > 0) {
          setProducts(getProduct);
        } else {
          setError("محصولی یافت نشد");
        }
      }
    } catch (error) {
      console.error("error fetching data", error);
      setError("خطا در برگذاری داده ها");
    }
  }, [decodedParams, decodedCatParams, getCatParams]);

  useEffect(() => {
    fetchData();
  }, [decodedParams, fetchData]);
  console.log(decodedParams);
  return (
    <div>
      <ProductsPage
        products={products.length ? products : brand}
        category={products.length ? getCatParams : ""}
      />
    </div>
  );
}
