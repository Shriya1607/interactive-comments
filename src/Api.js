export const getComments = async () => {
  return [
    {
      id: "1",
      body: "This artwork is so beautiful",
      username: "Shriya",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "I love coffee so much.",
      username: "Saumya",
      userId: "2",
      parentId: null,
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "yess, i wanna buy them for my room",
      username: "Rahul",
      userId: "2",
      parentId: "1",
      createdAt: "2022-09-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "haha, true that",
      username: "Saurav",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "5",
      body: "so prettyyy",
      username: "Shivani",
      userId: "3",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Shriya",
    createdAt: new Date(),
    //   .toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
