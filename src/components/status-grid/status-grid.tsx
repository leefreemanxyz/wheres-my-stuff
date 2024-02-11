import { DeliveryType } from "@/types/delivery"
import { GridColumn } from "../grid-column/grid-column"
import { DeliveryList } from "../delivery-list/delivery-list"




export const StatusGrid = ({ deliveries }: { deliveries: DeliveryType }) => {

    // if this proves to be an expensive operation we can apply useMemo here
    const deliveriesByStatus = deliveries.reduce((acc, delivery) => {
        if (!acc[delivery.status]) {
            acc[delivery.status] = []
        }
        acc[delivery.status].push(delivery)
        return acc
    }, {} as Record<string, DeliveryType>)

    return (
        <div className="grid md:grid-cols-4 grid-cols-1 container gap-4">
            <GridColumn
                title={"Planned"}
                total={deliveriesByStatus['planned'].length}
            >
                <DeliveryList deliveries={deliveriesByStatus["planned"]} />
            </GridColumn>
            <GridColumn
                title={"In Progress"}
                total={deliveriesByStatus['in-progress'].length}
            >
                <DeliveryList deliveries={deliveriesByStatus["in-progress"]} />
            </GridColumn>
            <GridColumn
                title={"Delivered"}
                total={deliveriesByStatus['delivered'].length}
            >
                <DeliveryList deliveries={deliveriesByStatus["delivered"]} />
            </GridColumn>
            <GridColumn
                title={"Unknown"}
                total={deliveriesByStatus['unknown'].length}
            >
                <DeliveryList deliveries={deliveriesByStatus["unknown"]} />
            </GridColumn>


        </div>
    )
}
