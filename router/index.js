import express from 'express';
import { about, contact, destination, destinations, home, packages } from '../controllers/PageController.js';
const router = express.Router();

router.get('/', home)

router.get('/about', about)

router.get('/contact', contact)

router.get('/destinations', destinations)

router.get('/destinations/:slug', destination)

router.get('/packages', packages)

export default router;