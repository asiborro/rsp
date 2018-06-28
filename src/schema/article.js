import { schema } from 'normalizr';

export const articleSchema = new schema.Entity(
  'article',
  {},
  { idAttribute: 'id' }
);

export const articleResponseSchema = new schema.Object({
  items: new schema.Array(articleSchema)
});
