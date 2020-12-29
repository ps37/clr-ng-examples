/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesModule } from './examples.module';

import {
  CompodocSchema,
  NgLiveDocsModule,
  StackBlitzInfo,
} from '@vmw/ng-live-docs';
import componentsDocumentationJson from '../gen/components-doc.json';
import examplesDocumentationJson from '../gen/examples-doc.json';

export function moduleFinder(componentName: string): string {
  return componentName.replace('ExampleComponent', 'ExampleModule');
}

/**
 * The following 2 constants are declared for AOT compilation purpose. Otherwise, the compilation would silently fail and
 * the doc jsons are given as null to the NgLiveDocsModule.
 * NOTE: The following two has to be exported otherwise the AoT compiler won't see it.
 */
export const docJson1: CompodocSchema = (componentsDocumentationJson as unknown) as CompodocSchema;
export const docJson2: CompodocSchema = (examplesDocumentationJson as unknown) as CompodocSchema;
export const sbInfo: StackBlitzInfo = {
  templateId: 'clarity-v4-light-theme',
  projectName: 'Clarity Angular Examples',
  moduleFinder,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgLiveDocsModule.forRoot([docJson1, docJson2], sbInfo),
    ExamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
