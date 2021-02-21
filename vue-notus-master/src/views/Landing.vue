<template>
  <div>
    <navbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  About Us
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Over 10% of households in the U.S.
                  are food insecure. We believe that we
                  have a responsibility to 
                  uplift those around us in need.
                </p>
                
                <p class="mt-4 text-lg text-gray-300">
                  There are many ways that you can help!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Post Affordable Recipes</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Shop Using Our Site</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Make a Donation</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <router-link to="/" class="font-bold text-gray-800 mt-8">
                Check Vue Notus!
              </router-link>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-600"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-green-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

      </section>

      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Developers</h2>
            </div>
          </div>
          
          
          <div class="inline-flex" style="width: 100%;" v-for="(row,index) in team" :key="row[index].name">
          <div style="width: 100%" class="justify-center" v-for="dev in row" :key="dev.name">

          <div class="">
            <div class="w-full mb-12 mx-auto">
              <div class="px-6">
                <img
                  alt="..."
                  :src="dev.picture"
                  class="shadow-lg rounded-full mx-auto max-w-120-px"
                />

                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">{{dev.name}}</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    {{dev.role}}
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <a :href="dev.github">
                        <i class="fab fa-github"></i>
                      </a>
                    </button>
                    <button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <a :href="dev.linkedin">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </button>
                  </div>
                </div>
            </div>
            </div>


              </div>
            </div>
          </div>

          

        </div>
      </section>
      
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import team5 from "@/assets/img/team-4-470x470.png";
import team6 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,

      team: [
      [
        {
          name: "Aidan Mackey", 
          role: "Full Stack Web Developer", 
          github: "https://github.com/A-Mackey", 
          linkedin: "https://www.linkedin.com/in/aidanmackey",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQH4J8WLgPWNtw/profile-displayphoto-shrink_400_400/0/1598221957751?e=1619654400&v=beta&t=ISFdXREIWhUIOxWgsdPTjlJM8xFIk43XzcIx3YMY1lQ",
        },
        {
          name: "Stephen Mistele", 
          role: "Back Web & Database Developer", 
          github: "https://github.com/StephenMistele", 
          linkedin: "https://www.linkedin.com/in/stephenmistele/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQFBmP-MXjDj0w/profile-displayphoto-shrink_400_400/0/1571954741327?e=1619654400&v=beta&t=DQ8UiokLj5F0ZvVxi8jdQmE4n1vhkU-s3pffVCFG5fE",
        },
        {
          name: "Kevin Rooney", 
          role: "Full Stack Web Developer", 
          github: "https://github.com/kevinrooney", 
          linkedin: "https://www.linkedin.com/in/kevintrooney/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQF0J3mG7wk35Q/profile-displayphoto-shrink_400_400/0/1613522666260?e=1619654400&v=beta&t=H6AvbdZgEGYocgUEICMpKGh4DoufK4uVAkzVOpE3Nt4",
        },
      ],
      [
        {
          name: "Nick Tallis", 
          role: "Back End & Database Web Developer", 
          github: "https://github.com/NicholasTallis", 
          linkedin: "https://www.linkedin.com/in/nicholastallis/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQHNmjZfj2NyDQ/profile-displayphoto-shrink_400_400/0/1593729589081?e=1619654400&v=beta&t=8FuwHn0SEyAweNP5xav_Am7YcGH1H_hT7BnpKGd-E3E",
        },
        {
          name: "Lucca Voron", 
          role: "Front End Web Developer & Designer", 
          github: "https://github.com/lucasvoron", 
          linkedin: "https://www.linkedin.com/in/lucas-voron-435073198/",
          picture: "https://media-exp1.licdn.com/dms/image/C4E03AQFogBu97EHvAw/profile-displayphoto-shrink_400_400/0/1575489692749?e=1619654400&v=beta&t=PhTQ9qDBuQyHkO86AxgZoig91-19X_x1cNphlW3Q7Jo",
          },
        {
          name: "Kim Do", 
          role: "Front End Web Developer & Designer", 
          github: "https://github.com/ktdo01", 
          linkedin: "https://www.linkedin.com/in/kimtdo23/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQEsZCxNll4pMw/profile-displayphoto-shrink_400_400/0/1558029682997?e=1619654400&v=beta&t=yH5UtvV7d9RQa2Wqx3j5VjNOUN7pln-KykbUGrIZ_Mk",
          },
      ]
      ]
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
