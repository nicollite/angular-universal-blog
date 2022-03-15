import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post, PostContent } from "src/app/core/models/post";
import { PostService } from "../../services/post.service";

@Component({
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post = this.postService.getCurrentPost(params.id);
    });
  }
}
