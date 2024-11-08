import { OrderStatus } from "@prisma/client";
import { IsEnum, IsUUID } from "class-validator";
import { OrderStatusList } from "../enum/order.enum";

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;
  @IsEnum( OrderStatusList, {
    message: `VALID STATUS: ${OrderStatusList}`
  })
  status: OrderStatus
}