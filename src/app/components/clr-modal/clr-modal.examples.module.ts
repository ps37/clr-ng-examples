/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrModal } from '@clr/angular';
import { Documentation } from '@vmw/ng-live-docs';
import { ClrModalSizesExampleComponent } from './sizes/clr-modal-sizes.example.component';
import { ClrModalSizesExampleModule } from './sizes/clr-modal-sizes.example.module';

Documentation.registerDocumentationEntry({
  component: ClrModal,
  displayName: 'ClrModal',
  urlSegment: 'clrModal',
  examples: [
    {
      component: ClrModalSizesExampleComponent,
      title: 'Different sizes of Clarity Modal',
      urlSegment: 'clr-modal-sizes',
    },
  ],
});
@NgModule({
  imports: [CommonModule, ClrModalSizesExampleModule],
})
export class ClrModalExamplesModule {}
