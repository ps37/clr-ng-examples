/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrModal } from '@clr/angular';
import { Documentation } from '@vmw/ng-live-docs';
import { ClrModalBackdropExampleComponent } from './backdrop/clr-modal-backdrop.example.component';
import { ClrModalBackdropExampleModule } from './backdrop/clr-modal-backdrop.example.module';
import { ClrModalBasicExampleComponent } from './basic/clr-modal-basic.example.component';
import { ClrModalBasicExampleModule } from './basic/clr-modal-basic.example.module';
import { ClrModalSizesExampleComponent } from './sizes/clr-modal-sizes.example.component';
import { ClrModalSizesExampleModule } from './sizes/clr-modal-sizes.example.module';

Documentation.registerDocumentationEntry({
    component: ClrModal,
    displayName: 'ClrModal',
    urlSegment: 'clrModal',
    examples: [
        {
            component: ClrModalBasicExampleComponent,
            title: 'Basic Clarity Modal',
            urlSegment: 'clr-modal-basic',
        },
        {
            component: ClrModalSizesExampleComponent,
            title: 'Different sizes of Clarity Modal',
            urlSegment: 'clr-modal-sizes',
        },
        {
            component: ClrModalBackdropExampleComponent,
            title: 'Backdrop of Clarity Modal',
            urlSegment: 'clr-modal-backdrop',
        },
    ],
});
@NgModule({
    imports: [
        CommonModule,
        ClrModalBasicExampleModule,
        ClrModalSizesExampleModule,
        ClrModalBackdropExampleModule
    ],
})
export class ClrModalExamplesModule {}
