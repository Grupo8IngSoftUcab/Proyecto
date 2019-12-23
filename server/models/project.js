'use strict';
module.exports = (sequelize, DataTypes) => {
  //Falta archivos asociados y chat
  const Project = sequelize.define('Project', {
    titulo: DataTypes.STRING,
    etapa: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    presupuesto: DataTypes.STRING,
    creadorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    encargadoId:DataTypes.INTEGER,
    entregables: DataTypes.TEXT,
    visiblePortafolio: DataTypes.BOOLEAN,
    objetivos:DataTypes.ARRAY(DataTypes.TEXT),
    tecnologias:DataTypes.ARRAY(DataTypes.TEXT),
    adicionales:DataTypes.ARRAY(DataTypes.TEXT),
  }, {freezeTableName: true});
  Project.associate = function(models) {    
    Project.hasMany(models.ProjectStage, {as: 'etapasInfo',foreignKey:'proyectoId'})
    Project.belongsToMany(models.User, {through: 'IntPostulationProject', foreignKey: 'proyectoId', as: 'usuariosPostulados',otherKey: 'usuarioId'})
  };
  return Project;
};