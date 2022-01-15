export type Item = Omit<Comment, "level"> & {
  points: number;
  title: string;
  domain: string;
};

export type Comment = {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments_count: number;
  level: number;
  url: string;
  comments: Comment[];
  deleted: boolean;
};
