import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  metatags = [
    { name: "twitter:card", content: "summary" },
    { name: "og:url", content: "/" },
    { name: "og:title", content: "A Blog - A place to read about technology" },
    { name: "og:description", content: "A good place to read about tech articles" },
    { name: "og:image", content: "/assets/images/logo.png" },
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle("A Blog");

    this.metatags.forEach(tag => this.meta.updateTag(tag));
  }
}
