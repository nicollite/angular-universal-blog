import { Injectable } from "@angular/core";
import { makeStateKey } from "@angular/platform-browser";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Post } from "src/app/core/models/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  static MAIN_PAGE_POSTS_KEY = makeStateKey<Post[]>("main_page_posts");
  static POSTS_KEY(id: string) {
    return makeStateKey<Post>(`post-${id}`);
  }

  private mainPagePostsLimit = 10;

  private mainPagePosts: Post[] = [];

  private currentPost: Post;

  constructor(private db: AngularFirestore) {}

  setMainPagePosts(posts: Post | Post[]): void {
    posts = Array.isArray(posts) ? posts : [posts];
    this.mainPagePosts.push(...posts);
  }

  async getInitialPostForMainPage(): Promise<Post[]> {
    return this.db
      .collection("posts")
      .ref.limit(this.mainPagePostsLimit)
      .get()
      .then(querySnap => querySnap.docs.map(docSnap => docSnap.data() as Post));
  }

  async getCurrentPostInDb(id: string): Promise<Post> {
    return this.db
      .doc(`posts/${id}`)
      .ref.get()
      .then(docSnap => docSnap.data() as Post);
  }

  setCurrentPost(post: Post): void {
    this.currentPost = post;
  }

  getCurrentPost(): Post {
    return this.currentPost;
  }

  async getMainPagePosts(): Promise<Post[]> {
    return this.mainPagePosts;
  }
}
