"use client";
import React from "react";
import { useParams } from "next/navigation";

const Product = () => {
  const router = useParams();

  return <div>Product {router.slug}</div>;
};

export default Product;
