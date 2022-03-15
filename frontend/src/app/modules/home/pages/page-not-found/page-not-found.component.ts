import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"],
})
export class PageNotFoundComponent implements OnInit {
  emoji: string;
  private emojis = [
    "¯\\_(ツ)_/¯",
    "ಠ_ಠ",
    "⚆_⚆",
    "●︿●",
    "(╯°□°）╯︵ ┻━┻",
    "(ಥ﹏ಥ)",
    "ಠ╭╮ಠ",
    "(;¬_¬)",
    "(-_-メ)",
    "(・_・;)",
    "(・.・;)",
    "(@_@)",
    "o_õ",
  ];

  constructor() {}

  ngOnInit(): void {
    this.emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }
}
