export interface IPostsFeedState {
  posts: IPost[];
  users: IUser[];
  comments: IComment[];
  fetching: boolean;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostDetail {
  user: IUser;
  comments: IComment[];
  post: IPost;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: ICompany;
  website: string;
  address: IAddress;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
