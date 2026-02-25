const fs = require("fs");
const path = require("path");

// Read package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Read the dist/components directory
const componentsDir = path.join(__dirname, "..", "dist", "components");

if (!fs.existsSync(componentsDir)) {
  console.error(
    "Error: dist/components directory not found. Run 'npm run build' first.",
  );
  process.exit(1);
}

const components = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith(".js"));

// Build exports object
const exportsMap = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  },
  "./package.json": "./package.json",
};

// Add individual component exports
components.forEach((file) => {
  const componentName = file.replace(".js", "");
  const exportPath = `./${componentName}`;

  exportsMap[exportPath] = {
    import: `./dist/components/${file}`,
    types: `./dist/components/${componentName}.d.ts`,
  };
});

// Update package.json
packageJson.main = "./dist/index.js";
packageJson.module = "./dist/index.js";
packageJson.types = "./dist/index.d.ts";
packageJson.exports = exportsMap;

// Ensure sideEffects is set
packageJson.sideEffects = false;

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log("✅ package.json exports updated successfully!");
console.log(`   Added ${components.length} component exports`);
