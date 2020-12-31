/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, OnInit } from '@angular/core';

export enum ModalSize {
  small = 'sm',
  medium = 'md',
  large = 'lg',
  extraLarge = 'xl',
}

@Component({
  selector: 'clr-modal-sizes',
  templateUrl: './clr-modal-sizes.example.component.html',
  styleUrls: ['./clr-modal-sizes.example.component.scss'],
})
export class ClrModalSizesExampleComponent implements OnInit {
  constructor() {}

  modalSize = ModalSize;
  selectedSize: ModalSize = ModalSize.small;
  open = false;

  ngOnInit(): void {}
}
