// src/app/shared/shared-icons.module.ts
import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMenu2, IconSearch, IconChevronDown } from 'angular-tabler-icons/icons';

@NgModule({
  imports: [
    TablerIconsModule.pick({
      IconMenu2,
      IconSearch,
      IconChevronDown
    })
  ],
  exports: [TablerIconsModule]
})
export class SharedIconsModule { }
