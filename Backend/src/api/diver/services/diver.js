'use strict';

/**
 * diver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::diver.diver');
