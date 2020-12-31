/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClrModalSizesExampleComponent } from './clr-modal-sizes.example.component';

@NgModule({
  declarations: [ClrModalSizesExampleComponent],
  imports: [CommonModule, ClarityModule],
  exports: [ClrModalSizesExampleComponent],
  entryComponents: [ClrModalSizesExampleComponent],
})
export class ClrModalSizesExampleModule {}
