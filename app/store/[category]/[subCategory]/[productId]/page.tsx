"use client";
import { getBrands, getProducts } from "@/services/api";
import { IBrands, IBrandsResponse, IProduct } from "@/serverTypes/serverTypes";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ProductDetailPage from "@/components/productDetailPage/ProductDetailPage";

export default function DetailPage() {
  const [targetProduct, setTargetProduct] = useState<IProduct | null>(null);
  const [brand, setBrand] = useState<IProduct | null>(null);

  const params = useParams();

  const getCategory = params.category || "men";
  const getCat = Array.isArray(params.category)
    ? params.category[0]
    : params.category || "defaultCategory";
  console.log(getCategory);
  const paramsProductId = params.productId;
  const decodeProductId =
    typeof paramsProductId === "string"
      ? decodeURIComponent(paramsProductId)
      : "";
  console.log(decodeProductId);
  const decodeSubCategory =
    typeof params.subCategory === "string"
      ? decodeURIComponent(params.subCategory)
      : "";
  console.log(decodeSubCategory);

  const fetchData = useCallback(async () => {
    try {
      if (getCategory === "brands") {
        const responseBrands: IBrandsResponse = await getBrands();
        const combined = Object.values(responseBrands).flat();
        console.log(combined);
        const targetBrand = combined.find(
          (item: IBrands) => item.title === decodeSubCategory
        );
        console.log(targetBrand);
        const allBrands = targetBrand?.products;
        if (allBrands) {
          const targetBrandItem = allBrands.find(
            (item) => item.title === decodeProductId
          );
          if (targetBrandItem) {
            console.log(targetBrandItem);
            setBrand(targetBrandItem);
          }
        }
      } else {
        const response = await getProducts();
        console.log("Fetched Products:", response);

        const getTargetProducts = response?.[getCat]?.[decodeSubCategory] || [];
        console.log("Target Products:", getTargetProducts);

        const targetProduct =
          getTargetProducts.find(
            (item: { title: string }) => item.title === decodeProductId
          ) || null;
        console.log("Target Product:", targetProduct);
        setTargetProduct(targetProduct);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }, [decodeProductId, decodeSubCategory, getCat]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ProductDetailPage targetProduct={targetProduct ? targetProduct : brand} />
  );
}
