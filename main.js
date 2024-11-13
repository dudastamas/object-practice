const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const posts = [
  {
    id: 101,
    userId: 1,
    title: "Alice's first post",
    content: "This is the content of Alice's first post.",
  },
  {
    id: 102,
    userId: 1,
    title: "Alice's second post",
    content: "This is some other content from Alice.",
  },
  {
    id: 103,
    userId: 2,
    title: "Bob's post",
    content: "Bob shares his thoughts here.",
  },
  {
    id: 104,
    userId: 3,
    title: "Charlie's post",
    content: "Charlie writes something interesting.",
  },
];

const comments = [
  { id: 201, postId: 101, userId: 2, text: "Great post, Alice!" },
  { id: 202, postId: 101, userId: 3, text: "Thanks for sharing, Alice." },
  { id: 203, postId: 102, userId: 2, text: "Nice follow-up, Alice!" },
  { id: 204, postId: 103, userId: 1, text: "Interesting points, Bob." },
  { id: 205, postId: 104, userId: 1, text: "Good post, Charlie." },
];
