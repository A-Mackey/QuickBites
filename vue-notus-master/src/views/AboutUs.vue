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
            background-image: url('https://images.pexels.com/photos/4262002/pexels-photo-4262002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
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
                  More than 10% of households in the U.S. struggle to put food on the table. 
                  Join us in our stand against food insecurity and help us subsidize meals for low-income families.
                </p>

                <p class="mt-4 text-lg text-gray-300">
                  Here's how you can help us in our mission:
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
                <i class="fas fa-shopping-cart"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Shop Using Our Site</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Using our site, you will be saving money, time, and be giving back to your community.
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
                  <i class="fas fa-utensils"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Post Affordable Recipes</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    We're building a community of recipe enthusiasts.
                    Our platform is a place for people from all backgrounds to post and consume affordable, convienent and delicious home-made meals.
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
                    <i class="fas fa-hand-holding-usd"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Make a Donation</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    All money will go directly into our benefits program to subsidize meals for qualifying low-income individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="relative py-10">
        <div
          class=" top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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

      <section class="mb-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-12">
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

export default {
  data() {
    return {
      team: [
      [
        {
          name: "Aidan Mackey", 
          role: "Full Stack Developer", 
          github: "https://github.com/A-Mackey", 
          linkedin: "https://www.linkedin.com/in/aidanmackey",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQH4J8WLgPWNtw/profile-displayphoto-shrink_800_800/0/1598221957751?e=1619654400&v=beta&t=e6xhlYOnsDcuiwLYjwyBHmRGLDkHLV7-XEXJdaU1yTg",
        },
        {
          name: "Stephen Mistele", 
          role: "Full Stack & Database Developer", 
          github: "https://github.com/StephenMistele", 
          linkedin: "https://www.linkedin.com/in/stephenmistele/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQFBmP-MXjDj0w/profile-displayphoto-shrink_400_400/0/1571954741327?e=1619654400&v=beta&t=DQ8UiokLj5F0ZvVxi8jdQmE4n1vhkU-s3pffVCFG5fE",
        },
        {
          name: "Kevin Rooney", 
          role: "Full Stack Developer", 
          github: "https://github.com/kevinrooney", 
          linkedin: "https://www.linkedin.com/in/kevintrooney/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQF0J3mG7wk35Q/profile-displayphoto-shrink_400_400/0/1613522666260?e=1619654400&v=beta&t=H6AvbdZgEGYocgUEICMpKGh4DoufK4uVAkzVOpE3Nt4",
        },
      ],
      [
        {
          name: "Nick Tallis", 
          role: "Back End & Database Developer", 
          github: "https://github.com/NicholasTallis", 
          linkedin: "https://www.linkedin.com/in/nicholastallis/",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQHNmjZfj2NyDQ/profile-displayphoto-shrink_400_400/0/1593729589081?e=1619654400&v=beta&t=8FuwHn0SEyAweNP5xav_Am7YcGH1H_hT7BnpKGd-E3E",
        },
        {
          name: "Lucas Voron", 
          role: "Front End Developer & Designer", 
          github: "https://github.com/lucasvoron", 
          linkedin: "https://www.linkedin.com/in/lucas-voron-435073198/",
          picture: "https://media-exp1.licdn.com/dms/image/C4E03AQFogBu97EHvAw/profile-displayphoto-shrink_400_400/0/1575489692749?e=1619654400&v=beta&t=PhTQ9qDBuQyHkO86AxgZoig91-19X_x1cNphlW3Q7Jo",
          },
        {
          name: "Kim Do", 
          role: "Front End Developer & Designer", 
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
