import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Post, PostContent } from "src/app/core/models/post";
import { PostService } from "../../services/post.service";

@Component({
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.post = this.postService.getCurrentPost();

    this.title.setTitle(`${this.post.title} by ${this.post.author.name} | A Blog`);

    const metatags = [
      { name: "twitter:card", content: "summary" },
      { name: "og:url", content: `/post/${this.post.id}` },
      { name: "og:title", content: this.post.title },
      { name: "og:description", content: this.post.subtitle },
      { name: "og:image", content: this.post.img },
    ];

    const tags = metatags.map(tag => this.meta.updateTag(tag));
  }
}
