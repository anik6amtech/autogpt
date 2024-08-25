module.exports = {
  devServer: {
    proxy: {
      "/graphs": "https://gpt-backend.utdstyle.com",
    },
  },
};
