module.exports = {
  weather: {
    input: {
      target: "../out/DemoAPI.json",
    },
    output: {
      mode: "split",
      target: "endpoint.ts",
      schemas: "model",
    },
  },
};