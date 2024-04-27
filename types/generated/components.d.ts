import type { Schema, Attribute } from '@strapi/strapi';

export interface RegisterSubjectDescription extends Schema.Component {
  collectionName: 'components_register_subject_descriptions';
  info: {
    displayName: 'Subject Description';
    icon: 'feather';
  };
  attributes: {
    subject: Attribute.Relation<
      'register.subject-description',
      'oneToOne',
      'api::subjects.subjects'
    >;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'register.subject-description': RegisterSubjectDescription;
    }
  }
}
