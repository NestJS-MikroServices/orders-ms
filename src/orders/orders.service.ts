import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaClient } from "@prisma/client";

@Injectable()
export class OrdersService extends PrismaClient implements OnModuleInit{
  private readonly logger = new Logger("Orders-Services");
  async onModuleInit(){
    await this.$connect();
    this.logger.log("DATABASE CONNECTED");
  }

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  changeStatus(id: number){
    return 'This action chage the status or the order #{id}';
  }

  /*update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }*/

  /*remove(id: number) {
    return `This action removes a #${id} order`;
  }*/
}
