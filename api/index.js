const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;


app.use(cors());


app.use('/assets', express.static(path.join(__dirname, '../public/assets')));


const gallery = [
    { id: 1, title: 'Animation', image: 'http://localhost:5000/assets/Animation.gif', description: 'Animated logo' },
    { id: 2, title: 'Animation Logo', image: 'http://localhost:5000/assets/Animationlogo.gif', description: 'Logo animation' },
    { id: 3, title: 'Company Logo 1', image: 'http://localhost:5000/assets/companylogo1.svg', description: 'Partner logo' },
    { id: 4, title: 'Company Logo 2', image: 'http://localhost:5000/assets/companylogo2.svg', description: 'Partner logo' },
    { id: 5, title: 'Company Logo 3', image: 'http://localhost:5000/assets/companylogo3.svg', description: 'Partner logo' },
    { id: 6, title: 'Company Logo 4', image: 'http://localhost:5000/assets/companylogo4.svg', description: 'Partner logo' },
    { id: 7, title: 'Company Logo 5', image: 'http://localhost:5000/assets/companylogo5.svg', description: 'Partner logo' },
    { id: 8, title: 'Company Logo 6', image: 'http://localhost:5000/assets/companylogo6.svg', description: 'Partner logo' },
    { id: 9, title: 'Company Logo 7', image: 'http://localhost:5000/assets/companylogo7.svg', description: 'Partner logo' },
    { id: 10, title: 'Company Logo 8', image: 'http://localhost:5000/assets/companylogo8.svg', description: 'Partner logo' },
    { id: 11, title: 'Company Logo 9', image: 'http://localhost:5000/assets/companylogo9.svg', description: 'Partner logo' },
    { id: 12, title: 'Company Logo 10', image: 'http://localhost:5000/assets/companylogo10.svg', description: 'Partner logo' },
    { id: 13, title: 'Footer Logo', image: 'http://localhost:5000/assets/footer-logo.png', description: 'Footer branding' },
    { id: 14, title: 'Google', image: 'http://localhost:5000/assets/google.png', description: 'Google visual' },
    { id: 15, title: 'Haptic GIF', image: 'http://localhost:5000/assets/Haptic.gif', description: 'Motion graphic' },
    { id: 16, title: 'Haptic Logo GIF', image: 'http://localhost:5000/assets/Hapticlogo.gif', description: 'Company logo' },
    { id: 17, title: 'Harvard Project', image: 'http://localhost:5000/assets/harvard.png', description: 'Academic project' },
    { id: 18, title: 'Immersive Icon', image: 'http://localhost:5000/assets/immersive.svg', description: 'UI icon' },
    { id: 19, title: 'Logo', image: 'http://localhost:5000/assets/logo.png', description: 'Main logo' },
    { id: 20, title: 'Logo 1', image: 'http://localhost:5000/assets/logo1.png', description: 'Brand logo' },
    { id: 21, title: 'Logo 2', image: 'http://localhost:5000/assets/logo2.png', description: 'Brand logo' },
    { id: 22, title: 'Logo 3', image: 'http://localhost:5000/assets/logo3.png', description: 'Brand logo' },
    { id: 23, title: 'Logo 4', image: 'http://localhost:5000/assets/logo4.png', description: 'Brand logo' },
    { id: 24, title: 'Logo 5', image: 'http://localhost:5000/assets/logo5.png', description: 'Brand logo' },
    { id: 25, title: 'Logo 6', image: 'http://localhost:5000/assets/logo6.png', description: 'Brand logo' },
    { id: 26, title: 'Logo 7', image: 'http://localhost:5000/assets/logo7.png', description: 'Brand logo' },
    { id: 27, title: 'Logo 8', image: 'http://localhost:5000/assets/logo8.gif', description: 'Animated logo' },
    { id: 28, title: 'Logo 9', image: 'http://localhost:5000/assets/logo9.gif', description: 'Animated logo' },
    { id: 29, title: 'Logo 10', image: 'http://localhost:5000/assets/logo10.gif', description: 'Animated logo' },
    { id: 30, title: 'Momentify', image: 'http://localhost:5000/assets/momentify.png', description: 'Product screen' },
    { id: 31, title: 'Person Image', image: 'http://localhost:5000/assets/person.avif', description: 'User profile visual' },
    { id: 32, title: 'Pic', image: 'http://localhost:5000/assets/pic.avif', description: 'Visual artwork' },
    { id: 33, title: 'Pic 2', image: 'http://localhost:5000/assets/pic2.avif', description: 'Design mockup' },
    { id: 34, title: 'Pic 3', image: 'http://localhost:5000/assets/pic3.avif', description: 'Design concept' },
    { id: 35, title: 'Spark UI', image: 'http://localhost:5000/assets/spark.png', description: 'Creative UI' },
    { id: 36, title: 'Sprint Icon', image: 'http://localhost:5000/assets/sprint.svg', description: 'Iconography' },
    { id: 37, title: 'Tactile Icon', image: 'http://localhost:5000/assets/tactile.svg', description: 'Symbolic asset' },
    { id: 38, title: 'Video 1', image: 'http://localhost:5000/assets/video1.mp4', description: 'Video demo' },
    { id: 39, title: 'Video 4', image: 'http://localhost:5000/assets/video4.mp4', description: 'Demo loop' },
    { id: 40, title: 'Video 2', image: 'http://localhost:5000/assets/vidoe2.mp4', description: 'Explainer' }
];



app.get('/api/gallery', (req, res) => {
    res.json(gallery);
});

app.listen(PORT, () => {
    console.log(`Gallery API running at http://localhost:${PORT}`);
});
