import {Reactions} from "./Reactions.interface";
import {Items} from "./Items.interface";

export interface Bulletin {
  content: string,
  photo: string,
  image: string,
  text: string,
  name: string,
  reactions: Reactions,
  // items: Items []
}
