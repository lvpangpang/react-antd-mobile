const gulp = require("gulp");
const less = require("gulp-less");
const path = require("path");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const del = require("del");
const tsconfig = require("./tsconfig.json")

function clean() {
  return del("./es/**");
}

function buildStyle() {
  return gulp
    .src(["./src/**/*.less"], {
      base: "./src/"
    })
    .pipe(
      less({
        paths: [path.join(__dirname, "src")],
        relativeUrls: true,
      })
    )
    .pipe(gulp.dest("./es"));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ESNext",
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"])
    .pipe(tsProject)
    .pipe(babel())
    .pipe(gulp.dest("./es"));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: "ESNext",
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(["src/**/*.{ts,tsx}"])
    .pipe(tsProject)
    .pipe(gulp.dest("./es"));
}

exports.default = gulp.series(clean, buildES, buildDeclaration, buildStyle);
