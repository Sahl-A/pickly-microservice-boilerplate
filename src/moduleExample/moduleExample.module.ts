import { Module } from '@nestjs/common';
import { ServiceService } from './moduleExample.service';
import { ServiceController } from './moduleExample.controller';
import { ClientsModule } from 'src/clients/clients.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ServiceRepository } from './entities/serviceRepository';

@Module({
  imports: [
    ClientsModule,
    // TypeOrmModule.forFeature([ServiceRepository]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
