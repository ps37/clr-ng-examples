/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrModalExamplesModule } from './components/clr-modal/clr-modal.examples.module';

@NgModule({
  imports: [CommonModule, ClrModalExamplesModule],
})
export class ExamplesModule {}
