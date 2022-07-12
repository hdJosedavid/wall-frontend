import {Reactions} from "./Reactions";

export interface Items {
  content: string,
  photo: string,
  image: string,
  text: string,
  name: string,
  reactions: Reactions,
}

export interface Items extends Array<Items> {
}
