import { Timestamp } from "firebase/firestore";

export interface Post {
  id: string;
  title: string;
  postDate: Date | Timestamp;
  author: any;
  subtitle: string;
  tags: string[];
  img: string;
}
