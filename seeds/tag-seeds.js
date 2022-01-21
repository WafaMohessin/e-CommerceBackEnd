const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Documantary Movie',
  },
  {
    tag_name: 'Horrer Movie',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'Drama Movie',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
