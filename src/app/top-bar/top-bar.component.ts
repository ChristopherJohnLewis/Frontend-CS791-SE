import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent{

  tabs = [
    {linkName: "Authors", linkId: "/"},
    {linkName: "View Model", linkId: "/viewmodel"},
    {linkName: "Create Model", linkId: "/createmodel"},
    {linkName: "Evaluate Model", linkId: "/evaluatemodel"},
    {linkName: "Settings", linkId: "/settings"},
  ];


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/