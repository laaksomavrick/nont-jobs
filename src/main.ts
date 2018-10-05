import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { config } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(config.get('port'));
}
bootstrap();
