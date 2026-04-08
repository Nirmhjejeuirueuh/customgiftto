import fs from "fs";
import path from "path";
import * as toml from "toml";

const configFilePath = path.resolve("./src/config/config.toml");
const outputDir = path.resolve("./.astro");
const outputFilePath = path.join(outputDir, "config.generated.json");

/**
 * Convert TOML → JSON and write to `.astro`
 */
function convertTomlToJson() {
  try {
    const content = fs.readFileSync(configFilePath, "utf8");
    const parsed = toml.parse(content);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(parsed, null, 2), "utf8");
    console.log(`[toml-watcher] ✅ Generated ${outputFilePath}`);
  } catch (err) {
    console.error("[toml-watcher] ❌ Error converting TOML:", err.message);
  }
}

/**
 * Initial run
 */
console.log("[toml-watcher] Initial generation...");
convertTomlToJson();

/**
 * Watch TOML file for changes
 */
console.log(`[toml-watcher] 👀 Watching ${configFilePath} for changes...`);
fs.watch(configFilePath, (eventType) => {
  if (eventType === "change") {
    console.log("[toml-watcher] TOML file changed. Regenerating...");
    convertTomlToJson();
  }
});
