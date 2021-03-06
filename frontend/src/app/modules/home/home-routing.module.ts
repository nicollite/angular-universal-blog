import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { MainComponent } from "./pages/main/main.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PostComponent } from "./pages/post/post.component";
import { WipComponent } from "./pages/wip/wip.component";
import { MainPagePostsResolver } from "./resolvers/main-page-posts.resolver";
import { PostPageResolver } from "./resolvers/post-page.resolver";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: MainComponent, resolve: { mainPagePosts: MainPagePostsResolver } },
      { path: "post/:id", component: PostComponent, resolve: { posts: PostPageResolver } },
      { path: "about", component: WipComponent },
      { path: "contact", component: WipComponent },
      { path: "**", component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
