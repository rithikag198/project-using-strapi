const strapi = require('@strapi/strapi');

const app = strapi({
  dir: process.cwd(),
});

module.exports = async (req, res) => {
  await app.start();
  app.server(req, res);
};
