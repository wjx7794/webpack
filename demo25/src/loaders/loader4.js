function loader4(content, map, meta) {
  console.log('🌟loader4', this.resource); // /Users/wangjunxiang/Documents/Projects/webpack-demos/demo25/src/header.js?name=Jack
  console.log(this.query);
  return content;
}

module.exports = loader4;
