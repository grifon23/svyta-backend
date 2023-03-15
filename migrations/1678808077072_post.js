/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('post', {
        id: 'id',
        title: { type: 'varchar(30)', notNull: true },
    });
};

exports.down = (pgm) => {
    pgm.dropTable('post');
};