import { Timestamp } from "firebase/firestore";

export interface Post {
  id: string;
  title: string;
  postDate: string | Date | Timestamp;
  author: {
    name: string;
  };
  subtitle: string;
  tags: string[];
  img: string;
  content: PostContent[];
}

export type PostContent = PostContent.PostTitle | PostContent.PostParagraph | PostContent.PostImage;

namespace PostContent {
  interface PostContentBase {
    type: string;
  }

  export interface PostTitle extends PostContentBase {
    type: "title";
    text: string;
  }
  export interface PostSubTitle extends PostContentBase {
    type: "title";
    text: string;
  }

  export interface PostParagraph extends PostContentBase {
    type: "paragraph";
    text: string;
  }

  export interface PostImage extends PostContentBase {
    type: "image";
    imgSrc: string;
  }
}
