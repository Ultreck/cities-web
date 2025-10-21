import React from 'react'

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const MarketsDetailsPage = async ({ params }: PageProps) => {
const { slug } = await params;
console.log(slug);

  return (
    <div>
        
    </div>
  )
}

export default MarketsDetailsPage