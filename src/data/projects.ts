export interface Tag {
  label: string;
  bg: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
}

export interface TagDict {
  [lang: string]: Tag;
}

const tags: TagDict = {
  node: { label: "NodeJS", bg: "#68A063" },
  mongo: { label: "MongoDB", bg: "#00684A" },
  py: { label: "Python", bg: "#4584b6" },
  java: { label: "Java", bg: "#f89820" },
  react: { label: "React", bg: "#61DBFB" },
};

const getTags = (values: string[]): Tag[] => {
  return values.filter((value) => value in tags).map((value) => tags[value]);
};

export const projects: Project[] = [
  {
    title: "Receiptify Clone",
    description:
      "Generate collage of your most listened to albums of the month using Spotify API.",
    image: "/assets/receiptify-clone.png",
    tags: getTags(["react"]),
  },
  {
    title: "Project Manager Application",
    description:
      "Manage contracts, dues, and property maintenance of leased properties.",
    image: "/assets/project-manager.jpg",
    tags: getTags(["node", "mongo"]),
  },
  {
    title: "Reddit Clone",
    description: "Create posts, add comments, and vote for the front page.",
    image: "/assets/reddit-clone.PNG",
    tags: getTags(["node", "mongo"]),
  },
  {
    title: "Family Tree Chatbot",
    description:
      "Add family relationships and ask bot questions about the input.",
    image: "/assets/prolog.PNG",
    tags: getTags(["py"]),
  },
  {
    title: "Sokoban Bot",
    description:
      "Automatically solve popular block pushing game. Works on easy-medium sokoban problems.",
    image: "/assets/sokoban.PNG",
    tags: getTags(["java"]),
  },
];
