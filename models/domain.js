'use strict';

module.exports = function(sequelize, DataTypes) {
    var Domain = sequelize.define('Domain', {
        domain_name: DataTypes.STRING,
        created_time: DataTypes.DATE,
        modified_time: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
            // associations can be defined here
            },
            
        }
    });
    return Domain;
};

// Class Method
Model.associate = function (models) {
    // ...associate the models
};

Model.prototype.FindOneDomain = function (){
    return this.findOne(
        {
            where: {domain_name}
        })
        .then(datas => {
        return datas ? datas.get({plain: true}) : {} ;
    })
    
}