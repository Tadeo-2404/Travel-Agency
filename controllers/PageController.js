import { Packages } from '../models/Packages.js';
import {Viajes} from '../models/Viajes.js'

const home = async (req, res) => {
    const destinations = await Viajes.findAll({limit: 3});
    const packages = await Packages.findAll({limit: 3});

    res.render('home', {
        destinations,
        packages
    })
}

const about = (req, res) => {
    res.render('about', {

    })
}

const contact = (req, res) => {
    res.render('contact', {

    })
}

const destinations = async (req, res) => {

    const destinations = await Viajes.findAll();

    res.render('destinations', {
        destinations,
    })
}

const packages = async (req, res) => {

    const packages = await Packages.findAll();

    res.render('packages', {
        packages,
    })
}


const destination = async (req, res) => {

    const { slug } = req.params;

    try {
        const destination = await Viajes.findOne({ where: { slug: slug } });

        res.render('destination', {
            destination
        })
        
    } catch (error) {
        console.log(error)
    }
}

export {
    home,
    about,
    contact,
    destination,
    destinations,
    packages
}