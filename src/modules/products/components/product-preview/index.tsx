import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import ProductActions from "../product-actions"
import { useAccount } from "@lib/context/account-context"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  raw,
}: any) => {
  const { customer, retrievingCustomer } = useAccount()
  return (
    <div>
      <Link href={`/products/${handle}`} className="group">
        <div>
          <Thumbnail
            thumbnail={thumbnail}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="flex txt-compact-medium mt-2 justify-between">
            <Text className="text-ui-fg-subtle">{title}</Text>
            <div className="flex items-center gap-x-2">
              {price && customer ? (
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
      {customer && <ProductActions product={raw} />}
    </div>
  )
}

export default ProductPreview
