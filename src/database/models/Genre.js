module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoincrement: true,
            primaryKey: true            
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false        

        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {

        tableName: 'genres',
        timestamps: true
    };

    const Genre = sequelize.define(alias, cols, config)

    return Genre
}