import logo from '../src/assets/shared/desktop/logo.svg';

// Elements Category

import earphoneCategory from '../src/assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphoneCategory from '../src/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersCategory from '../src/assets/shared/desktop/image-category-thumbnail-speakers.png';

// Elements Cards Main Imgs

import zx9Speaker from '../src/assets/home/desktop/image-speaker-zx9.png';
import Zx9SpeakerBackgroundImg from '../src/assets/home/desktop/pattern-circles.svg';

// Bringing Best Gear Imgs 

import bestGearImgs from '../src/assets/shared/desktop/image-best-gear.jpg';

// Footer Elements

import iconFacebook from '../src/assets/shared/desktop/icon-facebook.svg';
import iconInstagram from '../src/assets/shared/desktop/icon-instagram.svg';
import iconTwitter from '../src/assets/shared/desktop/icon-twitter.svg';

// Products OuterPage Imgs 

import headphoneOne from '../src/assets/product-xx59-headphones/desktop/image-product.jpg';
import headphonesOneGalleryImgOne from '../src/assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import headphonesOneGalleryImgTwo from '../src/assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import headphonesOneGalleryImgThree from '../src/assets/product-xx59-headphones/desktop/image-gallery-3.jpg';


import headphoneTwo from '../src/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import headphonesTwoGalleryImgOne from '../src/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import headphonesTwoGalleryImgTwo from '../src/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import headphonesTwoGalleryImgThree from '../src/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';



import headphoneThree from '../src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import headphonesThreeGalleryImgOne from '../src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import headphonesThreeGalleryImgTwo from '../src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import headphonesThreeGalleryImgThree from '../src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';


import speakerOne from '../src/assets/product-zx7-speaker/desktop/image-product.jpg';
import speakerOneGalleryImgOne from '../src/assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import speakerOneGalleryImgTwo from '../src/assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import speakerOneGalleryImgThree from '../src/assets/product-zx7-speaker/desktop/image-gallery-2.jpg';

import speakerTwo from '../src/assets/product-zx9-speaker/desktop/image-product.jpg';
import speakerTwoGalleryImgOne from '../src/assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import speakerTwoGalleryImgTwo from '../src/assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import speakerTwoGalleryImgThree from '../src/assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

import earphonesImg from '../src/assets/product-yx1-earphones/desktop/image-product.jpg';
import EarphonesOneGalleryImgOne from '../src/assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import EarphonesOneGalleryImgTwo from '../src/assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import EarphonesOneGalleryImgThree from '../src/assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

export const heroData = [
    {paragraph: 'NEW PRODUCT'},
    {headingOne: 'XX99 MARK II', headingTwo: 'HEADPHONES'},
    {dataParagraph: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'}
];

export const elements = [
    {name: "Headphones", img: headphoneCategory, shop: 'headphones'},
    {name: "Speakers", img: speakersCategory, shop: 'speakers'},
    {name: "Earphones", img: earphoneCategory, shop: 'earphones'},
];

export const zx9SpeakerDetails = 
    {name: 'ZX9 SPEAKER', details: `Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound. See product`,
    mainImg: zx9Speaker, backgroundColor: '#d87d4a' , buttonText: 'SEE PRODUCT', backgroundImg: Zx9SpeakerBackgroundImg}

export const zx7SpeakerDetails = 
    {name: 'ZX7 SPEAKER' , buttonText: 'SEE PRODUCT'};


export const bestGear = {
    name1: 'BRINGING YOU THE' , spanName: 'BEST', name2: 'AUDIO GEAR', 
    details: `Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.`,
    img: bestGearImgs,
};

export const FooterDeatils = [
   {
    logo: logo,
    details: `Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.`
    ,copyRight: `Copyright ${new Date().getFullYear()}. All Rights Reserved`,
    socialMedia: {
        instagram: iconInstagram,
        facebook: iconFacebook,
        twitter: iconTwitter,
    }
   }
];

export const OuterPageProducts = [
    {
      id: 1,
      img: headphoneOne,
      productName: "XX59 HEADPHONES",
      category: 'headphones',
      price: 1099,
      details: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
      additonalImgs: {
        img1: headphonesOneGalleryImgOne,
        img2: headphonesOneGalleryImgTwo,
        img3: headphonesOneGalleryImgThree,
      }
    },
    {
      id: 2,
      productName: "XX99 MARK I HEADPHONES",
      category: 'headphones',
      ltr: true,
      price: 899,
      details: `As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`,
      img: headphoneTwo,
      additonalImgs: {
        img1: headphonesTwoGalleryImgOne,
        img2: headphonesTwoGalleryImgTwo,
        img3: headphonesTwoGalleryImgThree,
      }
    },
    {
      id: 3,
      img: headphoneThree,
      newProduct: 'NEW PRODUCT',
      category: 'headphones',
      price: 300,
      productName: "XX99 MARK II HEADPHONES",
      details: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.`
      ,additonalImgs: {
        img1: headphonesThreeGalleryImgOne,
        img2: headphonesThreeGalleryImgTwo,
        img3: headphonesThreeGalleryImgThree,
      }
   
    },
    {
      id: 4,
      img: speakerOne,
      productName: "ZX7 SPEAKER",
      price: 530,
      category: 'speakers',
      details: `Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.`
      ,additonalImgs: {
        img1: speakerOneGalleryImgOne,
        img2: speakerOneGalleryImgTwo,
        img3: speakerOneGalleryImgThree,
      }
    
    },
    {
      id: 5,
      productName: "XX99 MARK I SPEAKERS",
      newProduct: 'NEW PRODUCT',
      category: 'speakers',
      price: 899,
      ltr: true,
      details: `As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`,
      img: speakerTwo,
      additonalImgs: {
        img1: speakerTwoGalleryImgOne,
        img2: speakerTwoGalleryImgTwo,
        img3: speakerTwoGalleryImgThree,
      }
    },
    {
      id: 6,
      img: earphonesImg,
      category: 'earphones',
      newProduct: 'NEW PRODUCT',
      price: 990,
      productName: "ZX9 SPEAKER",
      details: `Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.`
      , additonalImgs: {
        img1: EarphonesOneGalleryImgOne,
        img2: EarphonesOneGalleryImgTwo,
        img3: EarphonesOneGalleryImgThree,
      }
    
    }
  ];
  

export const paymentDetailsEMoney = [
   {input: "e-Money"},
   {number: "e-Money Number", placeHolder: "2313413"},
   {number: "e-Money PIN", placeHolder: "2913"},

   {input: "Cash"},
   {details: 
  
    `Lorem Lorem`

   }
];