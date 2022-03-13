import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/core/models/post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    {
      id: "1",
      title: "The Advantages of Angular Universal",
      postDate: new Date(2021, 10, 1),
      author: { name: "Nicolas Conte" },
      subtitle: "Meet the advantages of Angular Universal",
      tags: ["tag1", "tag2", "tag3"],
      img: "https://miro.medium.com/max/520/1*ytpzQXUtyJx2xD2j1iRIZA.png",
    },
    {
      id: "2",
      title: "Angular Framework",
      postDate: new Date(2021, 4, 7),
      author: { name: "Nicolas Conte" },
      subtitle: "A quick look in Angular framework",
      tags: ["tag1", "tag2"],
      img: "https://angular.io/assets/images/logos/angular/angular.svg",
    },
    {
      id: "3",
      title: "Server Side Rendering and it's advantages",
      postDate: new Date(2021, 3, 17),
      author: { name: "Nicolas Conte" },
      subtitle: "A overview on ssr",
      tags: ["tag1"],
      img: "https://miro.medium.com/max/1400/1*vqhwJbAmYIOQ20Va8RI6zg.png",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
