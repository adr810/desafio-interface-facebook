import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "André Felipe",
          avatar: "https://tinyurl.com/y2tuc66j",
        },
        date: "18 Set 2020",
        content: "Post de exemplo",
        comments: [
          {
            id: 2,
            author: {
              name: "Leonardo Caetano",
              avatar: "https://tinyurl.com/yxtgoka5",
            },
            date: "18 Set 2020",
            content:
              "Comentário de exemplo",
          },
        ],
      },
      {
        id: 3,
        author: {
          name: "Lucas Kruschewsky",
          avatar: "https://tinyurl.com/y5zpjglw",
        },
        date: "17 Set 2020",
        content:
          "Post de exemplo",
        comments: [
          {
            id: 4,
            author: {
              name: "Gustavo Bachega",
              avatar: "https://tinyurl.com/yyfr5ba3",
            },
            date: "17 Set 2020",
            content:
              "Comentário de exemplo",
          },
          {
            id: 5,
            author: {
              name: "Thiago Vitorino",
              avatar: "https://tinyurl.com/y3axunx6",
            },
            date: "17 Set 2020",
            content:
              "Comentário de exemplo",
          },
        ],
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51",
        },
        date: "16 Set 2020",
        content:
          "Post de exemplo",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5",
            },
            date: "16 Set 2020",
            content:
              "Post de exemplo",
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11",
            },
            date: "16 Set 2020",
            content:
              "Post de exemplo",
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
