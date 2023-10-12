module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("layout.css")
  eleventyConfig.addPassthroughCopy("csv-search-widget.css")
  eleventyConfig.addPassthroughCopy("csv-search-widget.js")
  eleventyConfig.addPassthroughCopy({"20230814V1-Emergency-reform-faqmyths-data.csv": "emergency-reform-faqs.csv"})
  eleventyConfig.addPassthroughCopy("./node_modules/bootstrap/dist/css/bootstrap.min.css")
  eleventyConfig.addPassthroughCopy("./node_modules/bootstrap/dist/js/bootstrap.min.js")
  eleventyConfig.addPassthroughCopy("./node_modules/jquery/dist/jquery.min.js")


  eleventyConfig.setServerOptions({
    port: 5050,
    watch: [
      "_site/*.css",
      "_site/*.js"
    ]
  })
}
