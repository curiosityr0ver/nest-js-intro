import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users') //shows us that this controller will handle /users route
export class UsersController {
  /*
  plan routes
  GET /users
  GET /users:id
  POST /users
  PUT /users/:id
  DELETE /users/:id
   */

  @Get() // GET /users
  findAll() {
    return ['Hey', 'You', 'There'];
  }

  @Get(':id') // GET /users:id
  findOne(@Param('id') id: string) {
    return ['Hey', 'You', 'There'].find((entry) => {
      return entry == id;
    });
  }

  @Post() //POST /users
  create(@Body() user: object) {
    // same as const user = req.body
    return user;
  }

  @Put(':id') //PUT /users
  update(@Param('id') id: string, @Body() user: object) {
    // same as const user = req.body, const id = req.params.id

    return { id, user };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
