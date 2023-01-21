import { NgModule } from '@angular/core';
import { ApiLsImplModule } from './api-ls-impl/api-ls-impl.module';

@NgModule({
  imports: [ApiLsImplModule],
  exports: [ApiLsImplModule],
})
export class ApiMoviesModule {}
