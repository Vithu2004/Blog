import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticlesImage extends Schema.Component {
  collectionName: 'components_articles_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface ArticlesSubtitles extends Schema.Component {
  collectionName: 'components_articles_subtitles';
  info: {
    displayName: 'Subtitles';
  };
  attributes: {
    SubTitle: Attribute.String;
  };
}

export interface ArticlesText extends Schema.Component {
  collectionName: 'components_articles_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'articles.image': ArticlesImage;
      'articles.subtitles': ArticlesSubtitles;
      'articles.text': ArticlesText;
    }
  }
}
