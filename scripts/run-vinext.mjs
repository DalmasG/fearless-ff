import { spawn } from "node:child_process";

const [tool, ...rawArguments] = process.argv.slice(2);

if (tool !== "vite" && tool !== "vinext") {
  throw new Error("Expected either vite or vinext.");
}

const isFastDevelopmentMode = rawArguments.includes("--fast");
const argumentsToPass = rawArguments.filter((argument) => argument !== "--fast");
const env = {
  ...process.env,
  ...(isFastDevelopmentMode
    ? { FEARLESS_FAST_DEV: "true" }
    : { WRANGLER_LOG_PATH: ".wrangler/wrangler.log" }),
};
const child = spawn(tool, argumentsToPass, {
  env,
  stdio: "inherit",
  // npm adds node_modules/.bin to PATH. On Windows, let cmd.exe resolve its
  // .cmd shim instead of asking Node to spawn that shim directly.
  shell: process.platform === "win32",
});

child.on("error", (error) => {
  throw error;
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exitCode = code ?? 1;
});
