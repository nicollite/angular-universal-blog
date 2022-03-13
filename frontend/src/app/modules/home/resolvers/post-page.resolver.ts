import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { TransferState } from "@angular/platform-browser";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Post } from "src/app/core/models/post";
import { PostService } from "../services/post.service";

@Injectable({
  providedIn: "root",
})
export class PostPageResolver implements Resolve<void> {
  constructor(
    private postService: PostService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const postId = route.params.id;
    const POST_KEY = PostService.POSTS_KEY(postId);
    if (this.transferState.hasKey(POST_KEY)) {
      this.transferState.get<Post[]>(POST_KEY, null);
      this.transferState.remove(POST_KEY);
    } else {
      const post = await this.postService.getCurrentPostInDb(postId);
      if (isPlatformServer(this.platformId)) this.transferState.set(POST_KEY, post);
      else this.postService.setCurrentPost(post);
    }
  }
}
