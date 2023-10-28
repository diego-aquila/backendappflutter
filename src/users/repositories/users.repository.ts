import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import axios from 'axios';
import { TwilioService } from 'src/services/twilio.service';

@Injectable()
export class UsersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly twilio: TwilioService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { celphone, name } = createUserDto;
    try {
      console.log(`Cel DTO: ${celphone}`);

      const create = await this.prisma.users.create({
        data: createUserDto,
      });
      const createMess = this.twilio.createMensagem();

      return create;
    } catch (error) {
      // Lide com a exceção aqui, por exemplo, registrando-a ou lançando-a novamente
      console.error('Erro ao fazer a solicitação POST:', error);
      throw error; // Você pode escolher lançar a exceção novamente ou retornar algum tipo de mensagem de erro personalizada
    }
  }

  async findAll() {
    return this.prisma.users.findMany({
      select: {
        id: true,
        isActive: true,
        name: true,
        cpf: true,
        celphone: true,

        class: {
          select: {
            name: true,
          },
        },
        plan: {
          select: {
            name: true,
          },
        },
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }
}
