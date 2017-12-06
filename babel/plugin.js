function A(q) {
  return {
    visitor: {
      Identifier(path, parent) {
		  if (path.node.name.indexOf("babel_") === 0) {
			  path.node.name = path.node.name.slice(6)
		  }
      }
    }
}};

module.exports = A
