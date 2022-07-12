import {Reactions} from "./Reactions";
import {Items} from "./Items";

export interface Bulletin {
  content: string,
  photo: string,
  image: string,
  text: string,
  name: string,
  reactions: Reactions,
  // items: Items []
}
