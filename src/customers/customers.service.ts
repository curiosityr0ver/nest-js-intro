import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto);
  }

  async login(username: string, password: string) {
    const user = await this.customerRepository.findOneBy({ username });
    if (user.password == password) {
      return 'logged in';
    } else {
      return 'failed';
    }
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOneBy({ userid: id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
