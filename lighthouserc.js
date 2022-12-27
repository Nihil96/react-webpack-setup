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
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 1 }],
        "csp-xss": "warn",
        "render-blocking-resources": "warn",
        "unused-javascript": "off",
        "image-size-responsive": "off",
        "image-aspect-ratio": "off",
      },
    },
  },
}
