import { Component, Input, OnInit } from "@angular/core";
import { Timestamp } from "firebase/firestore";

@Component({
  selector: "app-author-and-date",
  templateUrl: "./author-and-date.component.html",
  styleUrls: ["./author-and-date.component.scss"],
})
export class AuthorAndDateComponent implements OnInit {
  @Input() author: string;
  @Input() date: string | Date | Timestamp;

  constructor() {}

  ngOnInit(): void {}
}
