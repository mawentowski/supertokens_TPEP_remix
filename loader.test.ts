const { loader } = require("./app/routes/api/auth/test");

describe("loader function", () => {
  it("should load data correctly", async () => {
    // Mock request object
    const mockRequest = {
      method: "GET",
      url: "http://example.com",
      headers: new Map([
        ["content-type", "application/json"],
        ["Cookie", "cookieValue=123"],
      ]),
      async json() {
        return { key: "value" }; // Simulated JSON data
      },
      async formData() {
        return new FormData(); // Simulated FormData object
      },
    };

    // Call the loader function with the mock request
    const data = await loader({ request: mockRequest });

    // Assert the returned data
    expect(data).toEqual({
      method: "GET",
      url: "http://example.com",
      headers: {
        "content-type": "application/json",
        Cookie: "cookieValue=123",
      },
      formData: {},
      jsonData: { key: "value" },
      cookie: "cookieValue=123",
    });
  });
});
