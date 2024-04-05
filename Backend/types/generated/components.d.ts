import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionCard extends Schema.Component {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'card';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    callToActionLabel: Attribute.String;
    image: Attribute.Media;
    callToActionUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.card': SectionCard;
    }
  }
}
