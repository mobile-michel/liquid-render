module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets"); // Scss, JS, and images files
    return {
        dir: {
            input: "src", // Set the source for 11ty to the /src directory
        },
        templateFormats: ["html", "md", "liquid"]
    };
};