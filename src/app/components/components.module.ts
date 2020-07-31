import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [SectionComponent, TabsComponent],
  imports: [
    CommonModule
  ],
  exports: [SectionComponent, TabsComponent]
})
export class ComponentsModule { }
