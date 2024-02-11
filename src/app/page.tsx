import { StatusGrid } from "@/components/status-grid/status-grid"
import { fetchDeliveries } from "@/data/fetchDeliveries"

export default async function Home() {
  const deliveries = await fetchDeliveries()

  return (
    <main className="flex py-4">
      <StatusGrid deliveries={deliveries} />
    </main>
  )
}
