import { Module, OnModuleInit } from '@nestjs/common';
import { LifeCycleService } from './life-cycle.service';
import { LifeCycleController } from './life-cycle.controller';

@Module({
  controllers: [LifeCycleController],
  providers: [LifeCycleService]
})
export class LifeCycleModule implements OnModuleInit {
    onModuleInit() {
        console.log("Life cycle init");
    }
}
