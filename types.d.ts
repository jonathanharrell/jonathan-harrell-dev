export interface Mention {
  author: {
    name: string;
    photo: string;
    url: string;
  };
  url: string;
  published: string;
  content: {
    html: string;
    text: string;
  };
}
