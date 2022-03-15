import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { TransferState } from "@angular/platform-browser";
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Timestamp } from "firebase/firestore";
import { Observable, of } from "rxjs";
import { Post } from "src/app/core/models/post";
import { PostService } from "../services/post.service";

@Injectable({
  providedIn: "root",
})
export class MainPagePostsResolver implements Resolve<void> {
  constructor(
    private postService: PostService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {}

  async resolve(): Promise<void> {
    if (this.postService["mainPagePosts"].length > 0) return;

    if (this.transferState.hasKey(PostService.MAIN_PAGE_POSTS_KEY)) {
      const posts = this.transferState.get<Post[]>(PostService.MAIN_PAGE_POSTS_KEY, []);

      this.postService.setMainPagePosts(posts);
      this.transferState.remove(PostService.MAIN_PAGE_POSTS_KEY);
      return;
    }

    const posts = await this.postService.getInitialPostForMainPage();

    if (isPlatformServer(this.platformId)) {
      posts.forEach(post => {
        post.postDate = (post.postDate as Timestamp).toDate();
      });
      this.transferState.set(PostService.MAIN_PAGE_POSTS_KEY, posts);
    } else {
      this.postService.setMainPagePosts(posts);
    }
  }
}
