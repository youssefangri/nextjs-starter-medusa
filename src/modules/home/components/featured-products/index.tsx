import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <ul className="flex flex-col gap-x-6 gap-y-8">
      {collections.map((collection) => (
        <li key={collection.id}>
          <ProductRail collection={collection} />
        </li>
      ))}
    </ul>
  )
}

export default FeaturedProducts
