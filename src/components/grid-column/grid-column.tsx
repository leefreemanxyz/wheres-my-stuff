import { DeliveryType } from "@/types/delivery"


export const GridColumn = ({
    total, children, title
}: {
    total: number, children: React.ReactNode, title: string
}) => {
    return (
        <div>
            <h2 className="capitalize font-bold">
                {title} ({total})
            </h2>
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </div>
    )
}