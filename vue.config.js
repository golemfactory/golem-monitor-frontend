module.exports = {
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