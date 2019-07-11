module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ui/' : '/',
  devServer: {
    proxy: {
      "/v1/nodes": {
        target: "https://stats.golem.network",
        secure: true
      },
      "/dump": {
        target: "http://localhost:8081",
        secure: false
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scss/_fonts.scss";
            @import "@/scss/_variables.scss";
            @import "@/scss/_main.scss";
            @import "@/scss/_grid.scss";
        `
      }
    }
  }
}
