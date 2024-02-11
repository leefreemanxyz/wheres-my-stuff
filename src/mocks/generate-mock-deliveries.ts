import { writeFileSync } from "node:fs"
import {
  DeliveryType,
  ItemType,
  SingleDeliveryType,
  categories,
  items,
  statuses,
} from "@/types/delivery"

const getRandomStatus = (): SingleDeliveryType["status"] => {
  return statuses[Math.floor(Math.random() * statuses.length)]
}

const getRandomCategory = (): SingleDeliveryType["category"] => {
  return categories[Math.floor(Math.random() * categories.length)]
}

// generates a random date between 2 weeks ago and 3 weeks in the future
const getRandomDeliveryDate = (): Date => {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - Math.floor(Math.random() * 14))

  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 21))

  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  )
}

// generates a random date in the last 7 days
const getActualDeliveredDate = () => {
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() - Math.floor(Math.random() * 7))
  return new Date(deliveryDate)
}

const getRandomDeliveryItems = () => {
  const deliveryItems: ItemType[] = []
  for (let i = 0; i < items.length; i++) {
    const feelingLucky = Math.random() > 0.5
    if (feelingLucky) {
      deliveryItems.push({
        name: items[i],
        quantity: Math.floor(Math.random() * 20),
      })
    }
  }
  return deliveryItems
}

const generateRandomDelivery = (id: number): SingleDeliveryType => {
  const status = getRandomStatus()
  const items = getRandomDeliveryItems()
  return {
    id: `TR${id}`,
    status,
    plannedDeliveryDate: getRandomDeliveryDate(),
    actualDeliveryDate:
      status === "delivered" ? getActualDeliveredDate() : undefined,
    category: getRandomCategory(),

    items,
  }
}

export const generateDeliveries = (n: number): DeliveryType => {
  const deliveries = Array.from({ length: n }, (_, i) =>
    generateRandomDelivery(i),
  )
  return deliveries.sort(
    (a, b) => +b.plannedDeliveryDate - +a.plannedDeliveryDate,
  )
}

const deliveries: DeliveryType = []
for (let i = 1; i <= 30; i++) {
  deliveries.push(generateRandomDelivery(i))
}

// Write to JSON file
writeFileSync("mock_deliveries.json", JSON.stringify(deliveries))

console.log("Mock deliveries generated successfully.")
