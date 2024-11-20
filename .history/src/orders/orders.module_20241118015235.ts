import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { envs, PRODUCT_SERVICE } from "../config";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    Nat
    /*ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productMSHost,
          port: envs.productMSPort
        }
      }
    ])*/
  ]
})
export class OrdersModule { }