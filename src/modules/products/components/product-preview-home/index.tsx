import React, {useState} from "react"
import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import ProductActions from "../product-actions"
import { useAccount } from "@lib/context/account-context"

const ProductPreviewHome = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  raw,
}: any) => {
  const { customer, retrievingCustomer } = useAccount()

  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail)

  const handleVariantChange = (variant: any) => {
    const variantThumbnail = variant?.thumbnail
    const variantImage = variant?.images[0]?.url;
    if (variantThumbnail) {
      
      setSelectedThumbnail(variantThumbnail)
      
    } else if (variantImage) {

      setSelectedThumbnail(variantImage)

    } else {
      // if no thumbnail or image, set default thumbnail
      setSelectedThumbnail(thumbnail)
    }
  };
  return (
    <div>
      <Link href={`/products/${handle}`} className="group">
        <div>
          <Thumbnail
            thumbnail={selectedThumbnail}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="flex txt-compact-medium mt-2 justify-between">
            <Text className="text-ui-fg-subtle">{title}</Text>
            <div className="flex items-center gap-x-2">
              {price && customer?.is_verified === "true" ? (
                <>
                  {price.price_type === "sale" && (
                    <Text className="line-through text-ui-fg-muted">
                      {price.original_price}
                    </Text>
                  )}
                  <Text
                    className={clsx("text-ui-fg-muted", {
                      "text-ui-fg-interactive": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </Text>
                </>
              ) : customer ? (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
      {customer?.is_verified === "true" && 
        <ProductActions 
            product={...raw} 
            onVariantChange={handleVariantChange}
        />}
    </div>
  )
}

export default ProductPreviewHome
