"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "../components/product-actions"
import { useAccount } from "@lib/context/account-context"
import { Gallery } from "../components/gallery"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const [imageIndex, setImageIndex] = useState(0);
  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  const { customer, retrievingCustomer } = useAccount()

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  const handleVariantChange = (variant: any) => {
   
    const variantImageId = variant?.images[0]?.id;
    const imageIndex = product.images?.findIndex(img => img.id === variantImageId)
    if (imageIndex!==undefined && imageIndex!==-1) {
      setImageIndex(imageIndex);
    }
     else {
      // if no thumbnail or image, set default thumbnail
      // setSelectedThumbnail(thumbnail)
    }
  };

  return (
    <ProductProvider product={product}>
      {/* <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          {isOnboarding && <ProductOnboardingCta />}
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        {customer?.is_verified === "true" && (
          <div
            className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12"
            ref={infoRef}
          >
            <ProductActions product={product} />
          </div>
        )}
      </div> */}
       <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images!.map((image: any) => ({
                src: image.url,
                altText: image.altText
              }))}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductInfo product={product} />
            {customer?.is_verified === "true" && (
            <ProductActions product={product} onVariantChange={handleVariantChange}/>
        )}
          </div>
        </div>
      </div>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div>
      {customer?.is_verified === "true" && <MobileActions product={product} show={!inView} />}
    </ProductProvider>
  )
}

export default ProductTemplate
