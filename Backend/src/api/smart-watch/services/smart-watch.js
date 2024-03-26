'use strict';

/**
 * smart-watch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smart-watch.smart-watch');
