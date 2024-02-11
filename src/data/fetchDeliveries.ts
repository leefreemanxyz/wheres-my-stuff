import { DeliverySchema } from "@/types/delivery"
import mocks from "../../mock_deliveries.json"

// in a real application we'd make an actual HTTP request
// zod parses the response against our schema and
// coerces date strings into Date objects
export const fetchDeliveries = async () => {
  const deliveries = await Promise.resolve(mocks)
  return DeliverySchema.parse(deliveries)
}
