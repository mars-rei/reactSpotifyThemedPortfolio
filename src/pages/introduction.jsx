import { Link } from 'react-router-dom';

import MobileNav from '../components/layout/mobileNav'; 

const Introduction = () => {
  return (
    <div>
        <div class="flex flex-row items-center relative pt-4 pb-3 bg-black text-white">
            <Link to="/about" class="contents cursor-pointer">
                <i class="fa fa-chevron-left absolute left-0 mx-5"></i>
            </Link>
            <p class="text-md font-bold w-full text-center">Imogen Dicen</p>
        </div>

        <div class="pb-24 text-white">
            <div class="flex justify-center items-center mt-4"> 
            <div class="w-full mx-4 aspect-square flex justify-center items-center">
                <img src="./images/headshot.jpeg" class="rounded-md" />
            </div>
            </div>

            <div class="ml-4 mt-3">
            <p class="text-3xl font-bold">Imogen Dicen</p>
            <p class="text-xs">Master's User Experience Design Student</p>
            </div>

            <div class="mx-4 mt-3 space-y-3 text-faded text-sm">
            <p>
                こんにちは! Bonjour! Hallo! Hi!
            </p>

            <p>
                I'm Imogen, but you can call me Mars! I'm a Computer Science graduate and a MSc UX Design student with interests in UX/UI design and engineering. 
            </p>

            <p>
                Originally, I chose my major out of love for coding. Over time, my creativity has gravitated me towards branches of computer science that mix technical skill with creative thinking.
            </p>

            <p>
                I'm currently focusing on the following projects (see the Projects section of my profile for more information):
            </p>

            <ul class="list-disc ml-6 mr-2">
                <li>
                    Game-themed portfolio: building a portfolio inspired by Nintendo's Tomodachi Life, following up on my last summer’s Spotify-themed portfolio
                </li>
                <li>
                    Crumbs Bakes website: collaborating in an agile team to design and build a website including an order management dashboard for a local small business
                </li>
                <li>
                    Main portfolio: transforming both my Spotify and Tomodachi Life themed portfolios into a lightweight full-stack website featuring dynamic theme-toggling and an easy-to-use CMS
                </li>
                <li>
                    Portfoliohub enhancement: upgrading my BSc final project - a portfolio website builder for creatives (excluding generative AI components)
                </li>
            </ul>

            <p>
                Academic highlights include:
            </p>

            <ul class="list-disc ml-6 mr-2">
                <li>
                    Being a top-performing student in my university’s UX module, achieving a final grade of 80%
                </li>
                <li>
                    Scoring the highest mark in our section on our presentation for our software design proposal and research
                </li>
                <li>
                    Winning 3rd place in the Innovative category at BCU's Innovation Festival 2024 with BookBot and TakeFive
                </li>
            </ul>
            </div>

            <div class="ml-4 mt-6 flex flex-row items-center gap-x-2">
            <img src="./images/headshot.jpeg" class="rounded-full w-6 h-6" />
            <p class="text-sm text-faded">Last updated on 14th September '26</p>
            </div>

            <div class="ml-4 mt-4 text-sm">
            <a href="mailto:imidcen@gmail.com?subject=Inquiry">
                <div class="flex items-center space-x-3">
                <span class="fa fa-envelope fa-lg w-6"></span>
                <p class="font-bold">Gmail</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/imogen-dicen/">
                <div class="flex items-center space-x-3 mt-3">
                <span class="fa-brands fa-linkedin fa-lg w-6"></span>
                <p class="font-bold">LinkedIn</p>
                </div>
            </a>
            
            <a href="https://github.com/mars-rei">
                <div class="flex items-center space-x-3 mt-3">
                <span class="fa-brands fa-github fa-lg w-6"></span>
                <p class="font-bold">Github</p>
                </div>
            </a>
            </div>
        </div>

      {/* mobile nav bar */}
      <MobileNav />
      
    </div>
    
  );
};

export default Introduction;