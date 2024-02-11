import { z } from "zod"

export const statuses = [
  "planned",
  "in-progress",
  "delivered",
  "unknown",
] as const

export const categories = ["truck", "ship", "plane"] as const

export const items = [
  "meatball machine",
  "chair",
  "bookcase",
  "table",
  "leg",
  "plushy",
] as const

export const ItemSchema = z.object({
  name: z.enum(items),
  quantity: z.number(),
})

export type ItemType = z.infer<typeof ItemSchema>

export const SingleDelivery = z.object({
  id: z.string(),
  status: z.enum(statuses),
  plannedDeliveryDate: z.coerce.date(),
  actualDeliveryDate: z.optional(z.coerce.date()),
  category: z.enum(categories),
  items: z.array(z.custom<ItemType>()),
})

export const DeliverySchema = z.array(SingleDelivery)
export type SingleDeliveryType = z.infer<typeof SingleDelivery>
export type DeliveryType = z.infer<typeof DeliverySchema>
