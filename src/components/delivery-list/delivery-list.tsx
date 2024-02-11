import { DeliveryType } from "@/types/delivery"
import { DeliveryCard } from "../delivery-card/delivery-card"

export const DeliveryList = ({ deliveries }: { deliveries: DeliveryType }) => {
    return (
        <>
            {deliveries.map((delivery) => {
                return (
                    <DeliveryCard key={delivery.id} delivery={delivery}></DeliveryCard>
                )
            })}
        </>
    )
}
