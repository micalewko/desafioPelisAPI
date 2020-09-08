module.exports = function (sequelize, dataTypes) {
  const alias = 'Peliculas';
  const cols = {
    id:{ 
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    title:{ 
      type: dataTypes.STRING,
    },
    length:{ 
      type: dataTypes.INTEGER,
    },
    awards:{ 
      type: dataTypes.INTEGER,
    },
    rating:{ 
      type: dataTypes.DOUBLE,
    }
  };
  const config = {
    tableName: "movies",
    timestamps: false
  }
  const Pelicula = sequelize.define(alias, cols, config);

  return Pelicula;
}