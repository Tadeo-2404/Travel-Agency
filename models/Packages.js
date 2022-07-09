import Sequelize from "sequelize";
import db from "../config/db.js";

export const Packages = db.define('packages', {
    titulo: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    descuento: {
        type: Sequelize.STRING
    }
});