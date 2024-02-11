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

export const DeliveryCard = ({
    delivery,
}: {
    delivery: SingleDeliveryType
}) => {
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
