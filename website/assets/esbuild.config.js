const esbuild = require("esbuild");

let minify = false;
let sourcemap = true;
let watch_fs = true;

if (process.env.NODE_ENV === "production") {
    minify = true;
    sourcemap = false;
    watch_fs = false;
}

const watch = watch_fs && {
    onRebuild(error) {
        if (error) console.error("[watch] build failed", error);
        else console.log("[watch] build finished");
    },
};
console.log(watch);

esbuild.build({
    entryPoints: ["./js/app.js"],
    outfile: "/app/build/app.js",
    bundle: true,
    minify: minify,
    sourcemap: sourcemap,
    watch: watch,
    plugins: [],
});
