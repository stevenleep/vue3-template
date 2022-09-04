import Mock from "mockjs";

const MockTimeout = "200-600";

Mock.setup({ timeout: MockTimeout });

Mock.mock("/api/mock-test", "get", () => {
  return {
    code: 0,
    msg: "success",
    data: {
      name: "mock-test",
    },
  };
});

Mock.mock("/api/mock-test", "post", () => {
  return {
    code: 0,
    msg: "success",
    data: {
      name: "create mock-test",
      username: "shdioshi",
    },
  };
});
