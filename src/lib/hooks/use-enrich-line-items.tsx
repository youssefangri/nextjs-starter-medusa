import { LineItem } from "@medusajs/medusa"
import omit from "lodash/omit"
import { useCart, useProducts } from "medusa-react"
import { useMemo } from "react"

const useEnrichedLineItems = (lineItems?: LineItem[], cartId?: string) => {
  const { cart } = useCart()

  const queryParams = useMemo(() => {
    if (lineItems) {
      return {
        id: lineItems.map((lineItem) => lineItem.variant.product_id),
        cart_id: cartId,
      }
    }

    return {
      id: cart?.items.map((lineItem) => lineItem.variant.product_id),
      cart_id: cart?.id,
    }
  }, [lineItems, cart?.items, cart?.id, cartId])

  const { products } = useProducts(queryParams, {
    enabled: !!lineItems || !!cart?.items?.length,
    keepPreviousData: true,
  })

  const items = useMemo(() => {
    const currItems = lineItems || cart?.items

    if (!currItems?.length || !products) {
      return []
    }

    const enrichedItems: Omit<LineItem, "beforeInsert">[] = []

    for (const item of currItems) {
      const product = products.find((p) => p.id === item.variant.product_id)

      if (!product) {
        enrichedItems.push(item)
        continue
      }

      const variant = product.variants.find((v) => v.id === item.variant_id)

      if (!variant) {
        enrichedItems.push(item)
        continue
      }

      enrichedItems.push({
        ...item,
        // @ts-ignore
        variant: {
          ...variant,
          // @ts-ignore
          product: omit(product, "variants"),
        },
      })
    }

    return enrichedItems
  }, [lineItems, cart?.items, cartId, products])

  return items
}

export default useEnrichedLineItems
