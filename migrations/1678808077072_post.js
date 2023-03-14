/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.createTable('posts', {
        id: 'id',
        titles: { type: 'varchar(1000)', notNull: true },

    })
};

exports.down = pgm => {
};
