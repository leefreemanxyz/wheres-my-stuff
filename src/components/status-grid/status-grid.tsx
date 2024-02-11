import { DeliveryType, SingleDeliveryType } from "@/types/delivery"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "../ui/collapsible"
import Image from "next/image"

export const DeliveryCard = ({ delivery }: { delivery: SingleDeliveryType }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{delivery.id}</CardTitle>
                <CardDescription className="capitalize">
                    Category: {delivery.category}
                </CardDescription>
                <CardDescription>
                    Expected on: {delivery.plannedDeliveryDate.toLocaleString("en-GB")}
                </CardDescription>
                {delivery.actualDeliveryDate && (
                    <CardDescription>
                        Delivered on: {delivery.actualDeliveryDate.toLocaleString("en-GB")}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between w-full">
                        Items in delivery{" "}
                        <Image src="/chevron-down.svg" width="24" height="24" alt="" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <ul>
                            {delivery.items.map((item) => {
                                return (
                                    <li className="capitalize" key={item.name}>
                                        {item.name}: {item.quantity}
                                    </li>
                                )
                            })}
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    )
}

export const GridColumn = ({
    groupedDeliveries,
}: {
    groupedDeliveries: DeliveryType
}) => {
    const title = groupedDeliveries[0].status
    return (
        <div>
            <h3 className="capitalize">
                {title} ({groupedDeliveries.length})
            </h3>
            <div className="flex flex-col gap-4">
                {groupedDeliveries.map((delivery) => {
                    return (
                        <DeliveryCard key={delivery.id} delivery={delivery}></DeliveryCard>
                    )
                })}
            </div>
        </div>
    )
}

export const StatusGrid = ({ deliveries }: { deliveries: DeliveryType }) => {
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
                groupedDeliveries={deliveriesByStatus["planned"]}
            ></GridColumn>
            <GridColumn
                groupedDeliveries={deliveriesByStatus["in-progress"]}
            ></GridColumn>
            <GridColumn
                groupedDeliveries={deliveriesByStatus["delivered"]}
            ></GridColumn>
            <GridColumn
                groupedDeliveries={deliveriesByStatus["unknown"]}
            ></GridColumn>
        </div>
    )
}
