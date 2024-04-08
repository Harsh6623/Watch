'use strict';

/**
 * milus-watch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::milus-watch.milus-watch');
