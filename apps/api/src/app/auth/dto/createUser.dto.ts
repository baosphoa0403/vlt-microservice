import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({ default: 'baosphoa0403@gmail.com' })
  email: string;

  @ApiProperty({ default: '123456' })
  password: string;
}
