// Logo
import reactjs from '../assets/img/react.png'
import nextjs from '../assets/img/nextjs-wht.png'
import typescript from '../assets/img/typescript.png'
import javascript from '../assets/img/javascript.png'
import gsap from '../assets/img/gsap-wht.png'
import styledComp from '../assets/img/styled-components-wht.png'
import tailwind from '../assets/img/tailwindcss-wht.png'
import sass from '../assets/img/sass.png'
import html from '../assets/img/html5-wht.png'
import css from '../assets/img/css3-wht.png'
import git from '../assets/img/git-wht.png'
import github from '../assets/img/github-wht.png'
import gitlab from '../assets/img/gitlab-wht.png'
import bitbucket from '../assets/img/bitbucket-wht.png'
import shopify from '../assets/img/shopify.png'
import wordpress from '../assets/img/wordpress.png'
import photoshop from '../assets/img/photoshop.png'
import illustrator from '../assets/img/illustrator.png'
import adobexd from '../assets/img/adboexd.png'
import figma from '../assets/img/figma.png'
import nodejs from '../assets/img/nodejs-wht.png'
import express from '../assets/img/express-1-wht.png'
import rethinkdb from '../assets/img/rethinkdb.png'
import restful from '../assets/img/restful-api.png'
import insomnia from '../assets/img/insomnia.png'
import postman from '../assets/img/postman.png'
import axios from '../assets/img/axios.png'
import lodash from '../assets/img/lodash.png'
import empty from '../assets/img/empty.png'
// Project Image
import proj1 from '../assets/img/prj1.jpg'
import proj2 from '../assets/img/prj2.jpg'
import proj3 from '../assets/img/prj3.jpg'
import proj4 from '../assets/img/prj4.jpg'
import proj5 from '../assets/img/prj5.jpg'
import proj6 from '../assets/img/prj6.jpg'
import proj7 from '../assets/img/prj7.jpg'
import proj8 from '../assets/img/prj8.jpg'
import proj9 from '../assets/img/prj9.jpg'
import proj10 from '../assets/img/prj10.jpg'
import proj11 from '../assets/img/prj11.jpg'
import proj12 from '../assets/img/prj12.jpg'
import proj13 from '../assets/img/prj13.jpg'
import proj14 from '../assets/img/prj14.jpg'
import proj15 from '../assets/img/prj15.jpg'
import proj16 from '../assets/img/prj16.jpg'

import { INav, ITechApps, IProjects } from '../types/types'

// interface INav {
//     id?: number
//     link?: string
//     text?: string
//     target?: string
// }
// interface ITechApps {
//     id?: number
//     img?: string | StaticImageData
//     txt?: string
//     classs?: string
// }
// interface IProjects {
//     id?: number
//     heading?: string
//     title?: string
//     date?: string
//     details?: string
//     language?: string
//     link?: string
//     img?: string | StaticImageData
//     bg?: string
// }

export const techApps: Array<ITechApps> = [
    {
        id: 1,
        img: reactjs,
        txt: 'ReactJs',
        classs: 'reactjs'
    },
    {
        id: 2,
        img: rethinkdb,
        txt: 'RethinkDB',
        classs: 'rethinkdb'
    },
    {
        id: 3,
        img: nodejs,
        txt: 'Node JS',
        classs: 'nodejs'
    },
    {
        id: 4,
        img: express,
        txt: 'Express',
        classs: 'express'
    },
    {
        id: 5,
        img: restful,
        txt: 'RESTful API',
        classs: 'restful'
    },    
    {
        id: 6,
        img: insomnia,
        txt: 'Insomnia',
        classs: 'insomnia'
    },
    {
        id: 7,
        img: postman,
        txt: 'Postman',
        classs: 'postman'
    },
    {
        id: 8,
        img: nextjs,
        txt: 'NextJs',
        classs: 'nextjs'
    },
    {
        id: 9,
        img: typescript,
        txt: 'Typescript',
        classs: 'typescript'
    },
    {
        id: 10,
        img: javascript,
        txt: 'Javascript',
        classs: 'javascript'
    },    
    {
        id: 11,
        img: axios,
        txt: 'Axios',
        classs: 'axios'
    },
    {
        id: 12,
        img: lodash,
        txt: 'Lodash',
        classs: 'lodash'
    },
    {
        id: 13,
        img: styledComp,
        txt: 'Styled Components',
        classs: 'styledcomp'
    },
    {
        id: 14,
        img: tailwind,
        txt: 'Tailwind CSS',
        classs: 'tailwind'
    },
    {
        id: 15,
        img: sass,
        txt: 'Sass',
        classs: 'sass'
    },
    {
        id: 16,
        img: html,
        txt: 'HTML5',
        classs: 'html'
    },
    {
        id: 17,
        img: css,
        txt: 'CSS 3',
        classs: 'css'
    },
    {
        id: 18,
        img: git,
        txt: 'Git',
        classs: 'git'
    },
    {
        id: 19,
        img: github,
        txt: 'Github',
        classs: 'github'
    },
    {
        id: 20,
        img: gitlab,
        txt: 'Gitlab',
        classs: 'gitlab'
    },
    {
        id: 21,
        img: bitbucket,
        txt: 'Bitbucket',
        classs: 'bitbucket'
    },
    {
        id: 22,
        img: shopify,
        txt: 'Shopify',
        classs: 'shopify'
    },
    {
        id: 23,
        img: wordpress,
        txt: 'Wordpress',
        classs: 'wordpress'
    },
    {
        id: 24,
        img: empty,
        txt: '',
        classs: 'empty'
    },
]

export const designApps: Array<ITechApps> = [
    {
        id: 1,
        img: photoshop,
        txt: 'Photoshop',
        classs: 'photoshop'
    },
    {
        id: 2,
        img: illustrator,
        txt: 'Illustrator',
        classs: 'illustrator'
    },
    {
        id: 3,
        img: adobexd,
        txt: 'Adobe Xd',
        classs: 'adobexd'
    },
    {
        id: 4,
        img: figma,
        txt: 'Figma',
        classs: 'figma'
    },
]

export const navMenu: Array<INav> = [
    {
        id: 1,
        link: '#',
        text: 'Github',
        target: '_blank'
    },
    {
        id: 2,
        link: '#',
        text: 'Linkedin',
        target: '_blank'
    },
    {
        id: 3,
        link: '#',
        text: 'Dribbble',
        target: '_blank'
    },
    {
        id: 4,
        link: '#',
        text: 'Behence',
        target: '_blank'
    },
    {
        id: 5,
        link: '#',
        text: 'Email',
        target: '_blank'
    },
]

export const projects: Array<IProjects> = [
    {   
        id: 1,
        heading: 'Landing Page',
        title: 'Cows Crown',
        date: '2020',
        details: 'A Japanese burger joint landing page using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'https://k-syu.com/cowscrown/index.html',
        img: proj1,
        // bg: '#f5e5b1'
        bg: '#111'
    },
    {   
        id: 2,
        heading: 'Website',
        title: 'Mizu Shinkyu',
        date: '2020',
        details: 'A Japanese acupuncture business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://mizu-shinkyu.com/',
        img: proj2,        
        // bg: '#e1e7f1'
        bg: '#111'
    },
    {   
        id: 3,
        heading: 'Website',
        title: 'Hermano',
        date: '2020',
        details: 'A Japanese pharmacy business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://hermano.co.jp/',
        img: proj3,
        // bg: '#a3b9b4'
        bg: '#111'
    },
    {   
        id: 4,
        heading: 'Website',
        title: 'Morita Auto',
        date: '2020',
        details: 'A Japanese car maintenance business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://www.morita-auto.co.jp/',
        img: proj4,
        // bg: '#f5e5b1'
        bg: '#111'
    },
    {   
        id: 5,
        heading: 'Ecommerce',
        title: 'Horita',
        date: '2020',
        details: 'A Japanese fruit business ecommerce website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'https://www.e-horita.co.jp/',
        img: proj5,
        // bg: '#f3f3f1'
        bg: '#111'
    },
    {   
        id: 6,
        heading: 'Website',
        title: 'Sinkyuseikotsu',
        date: '2020',
        details: 'A Japanese acupuncture business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://bukkaketei.com/',
        img: proj7,        
        // bg: '#e1e7f1'
        bg: '#111'
    },
    {   
        id: 7,
        heading: 'Website',
        title: 'Bukkaketei',
        details: 'A Japanese restaurant business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://bukkaketei.com/',
        img: proj6,
        // bg: '#f3f3f1'
        bg: '#111'
    },
    {   
        id: 8,
        heading: 'Landing Page',
        title: 'Mystique',
        date: '2020',
        details: 'A Japanese fitness business landing page using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'http://mystique-group.co.jp/',
        img: proj8,
        // bg: '#f3f3f1'
        bg: '#111'
    },
    {   
        id: 9,
        heading: 'Landing Page',
        title: 'Reunir Gracias',
        date: '2020',
        details: 'A Japanese fitness business landing page using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'https://reunirgracias.iot-mansion.jp/',
        img: proj9,
        // bg: '#e1e7f1'
        bg: '#111'
    },
    {   
        id: 10,
        heading: 'Landing Page',
        title: 'Suma Biz',
        date: '2020',
        details: 'A Japanese phone service business landing page using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'http://www.suma-biz.com/',
        img: proj10,        
        // bg: '#e1e7f1'
        bg: '#111'
    },
    {   
        id: 11,
        heading: 'Website',
        title: 'Kimono Houmi',
        date: '2020',
        details: 'A Japanese kimono business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://kimono-houmi.com/',
        img: proj11,
        // bg: '#f5e5b1'
        bg: '#111'
    },
    {   
        id: 12,
        heading: 'Landing Page',
        title: 'Dakishimeru',
        date: '2020',
        details: 'A Japanese liquid disinfectant business landing page using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery',
        link: 'https://july1st.tokyo/dakishimeru/',
        img: proj12,      
        // bg: '#f3f3f1'  
        bg: '#111'
    },
    {   
        id: 13,
        heading: 'Website',
        title: 'Osaka Fugetsu',
        date: '2020',
        details: 'A Japanese restaurant business website using HTML5, CSS3 and Javascript',
        language: 'HTML5, CSS3, Sass, Javascript, jQuery, Wordpress',
        link: 'https://osaka-fugetsu.com/',
        img: proj13,
        // bg: '#f5e5b1'
        bg: '#111'
    },
    {   
        id: 14,
        heading: 'Ecommerce',
        title: 'Pure Bella Vita',
        date: '2021',
        details: 'A American medical capsule ecommerce website using NextJs, TailwindCSS, and GSAP',
        language: 'HTML5, CSS3, Javascript, jQuery, Shopify',
        link: 'https://purebellavita.com/',
        img: proj14,
        // bg: '#a3b9b4'
        bg: '#111'
    },
    {   
        id: 15,
        heading: 'Website',
        title: 'Dream Home',
        date: '2022',
        details: 'A American realty business website using NextJs, TailwindCSS, and GSAP',
        language: 'NextJs, Typescript, Javascript, GSAP, TailwindCSS, Sass',
        link: 'https://www.dreamhomescorp.com/',
        img: proj15,
        // bg: '#f5e5b1'
        bg: '#111'
    },
    {   
        id: 16,
        heading: 'Landing Page',
        title: 'Go Rentals',
        date: '2022',
        details: 'A American transport business landing page using HTML5, CSS3 and Javascript',
        language: 'NextJs, Typescript, Javascript, GSAP, TailwindCSS, Sass',
        link: 'https://jsx.gorentals.com/',
        img: proj16,      
        // bg: '#e1e7f1'
        bg: '#111'
    },      
]