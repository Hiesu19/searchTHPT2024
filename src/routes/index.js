const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const errorsRouter = require("./errors");

function route(app) {
    app.use("/news", newsRouter);

    app.use("/courses", coursesRouter);

    app.use("/", siteRouter);

    app.use("/*", errorsRouter);
}
module.exports = route;
