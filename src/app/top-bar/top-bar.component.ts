import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
//Keeps track of tabs, active tab, and can swap active tabs based on onclick events in the .html
export class TopBarComponent{

  tabs = [
    {linkName: "Authors", linkId: "/"},
    {linkName: "View Model", linkId: "/viewmodel"},
    {linkName: "Create Model", linkId: "/createmodel"},
    {linkName: "Evaluate Model", linkId: "/evaluatemodel"},
    {linkName: "Settings", linkId: "/settings"},
  ];

  activeTab = "Authors";
  changeTab(activeTab:string){
    this.activeTab = activeTab
  }
}