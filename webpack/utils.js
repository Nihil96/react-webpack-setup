const path = require("path")

exports.getAliases = function () {
  const PROJECT_ROOT_PATH = path.resolve(__dirname, "..")
  const srcPath = path.resolve(PROJECT_ROOT_PATH, "src")

  return {
    "@apis": path.join(srcPath, "apis"),
    "@assets": path.join(srcPath, "assets"),
    "@constants": path.join(srcPath, "constants"),
    "@components": path.join(srcPath, "components"),
    "@pages": path.join(srcPath, "pages"),
    "@enums": path.join(srcPath, "enums"),
    "@models": path.join(srcPath, "models"),
    "@routes": path.join(srcPath, "routes"),
    "@services": path.join(srcPath, "services"),
    "@styles": path.join(srcPath, "styles"),
    "@utils": path.join(srcPath, "utils"),
    "@views": path.join(srcPath, "views"),
  }
}
