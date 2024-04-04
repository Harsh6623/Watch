'use strict';

/**
 * top-watch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-watch.top-watch');
