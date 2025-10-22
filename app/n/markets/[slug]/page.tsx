import ProductDetails from '@/components/communities/ProductDetails';
import React from 'react';
import { mockProducts } from "@/lib/mockData";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const MarketsDetailsPage = async ({ params }: PageProps) => {
const { slug } = await params;
console.log(slug);
const matchedProduct = mockProducts.find(product => product.id === slug);
if (!matchedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
        <ProductDetails data={matchedProduct} />
    </div>
  )
}

export default MarketsDetailsPage