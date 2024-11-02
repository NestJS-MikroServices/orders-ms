import { Controller, NotImplementedException } from "@nestjs/common";
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('createOrder')
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('findAllOrders')
  findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern('findOneOrder')
  findOne(@Payload('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('changeOrderStatus')
  changeStatus(){
    //return this.ordersService.changeStatus();
    throw new NotImplementedException();
  }

  /*@MessagePattern('updateOrder')  LAS ORDENES NUNCA SE DEBEN MODIFICAR
  update(@Payload() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(updateOrderDto.id, updateOrderDto);
  }*/

  /*@MessagePattern('removeOrder')  LAS ORDENES NO SE DEBEN ELIMINAR DEL HISTORIAL DEL NEGOCIO
  remove(@Payload() id: number) {
    return this.ordersService.remove(id);
  }*/
}
