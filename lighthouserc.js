module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist/",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      // skip the assertions and fix them later
      assertions: {
        "csp-xss": "warn",
        "render-blocking-resources": "warn",
        "unused-javascript": "off",
        "image-size-responsive": "off",
        "image-aspect-ratio": "off",
      },
    },
  },
}
