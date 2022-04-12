module.exports = (sequelize, dataTypes) => {
    let alias = 'movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoincrement: true,
            primaryKey: true            
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3.1).UNSIGNED,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {

        tableName: 'movies',
        timestamp: true

    };

    const movies = sequelize.define(alias, cols, config);

    return movies;
}