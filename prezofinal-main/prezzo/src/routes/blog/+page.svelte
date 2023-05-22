

<script>
  import { onMount, onDestroy } from "svelte";
  import {mediaurl} from "$lib/config";


  export let data 

  let blog = data.data.results



  console.log(data.data.count)


  
  let sliderIndex = 1;
  let sliderInterval;
  
  // Function to start the slider
  function startSlider() {
    // Set a timeout to call the showNextSliderBox function every 3 seconds
    sliderInterval = setInterval(function() {
      sliderIndex++;
      showSliderBox(sliderIndex);
    }, 3000);
  }

  // Function to show the specified slider box
  function showSliderBox(index) {
    // Get all slider boxes and hide them
    const sliderBoxes = document.querySelectorAll(".slider-box");
    sliderBoxes.forEach((box) => box.classList.remove("active"));
    
    // Get the current active slider box and remove its active class
    const activeBox = document.querySelector(".slider-box.active");
    if (activeBox) {
      activeBox.classList.remove("active");
    }
    
    // Calculate the new slider index based on the number of boxes
    if (index > sliderBoxes.length) {
      sliderIndex = 1;
    } else if (index < 1) {
      sliderIndex = sliderBoxes.length;
    } else {
      sliderIndex = index;
    }
    
    // Show the specified box and slide it in from the right
    sliderBoxes[sliderIndex - 1].classList.add("active");
  }

  onMount(() => {
    // Start the slider on mount
    startSlider();
  });

  onDestroy(() => {
    // Clear the slider interval on destroy to prevent memory leaks
    clearInterval(sliderInterval);
  });



    
  let currentPage = 1;
    let pageLinks;
  
    const updatePagination = () => {
      pageLinks.forEach((link, index) => {
        if (index + 1 === currentPage) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
  
      const previousBtn = document.querySelector('.previous');
      const nextBtn = document.querySelector('.next');
  
      if (currentPage === 1) {
        previousBtn.classList.add('disabled');
      } else {
        previousBtn.classList.remove('disabled');
      }
  
      if (currentPage === pageLinks.length) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
      }
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      const link = e.target.closest('a');
      if (link && !link.classList.contains('active') && !link.classList.contains('disabled')) {
        currentPage = +link.textContent;
        updatePagination();
      }
    };
  
    onMount(() => {
      pageLinks = document.querySelectorAll('.pagination .page');
      updatePagination();
  
      const previousBtn = document.querySelector('.previous');
      const nextBtn = document.querySelector('.next');
  
      previousBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          updatePagination();
        }
      });
  
      nextBtn.addEventListener('click', () => {
        if (currentPage < pageLinks.length) {
          currentPage++;
          updatePagination();
        }
      });
  
      pageLinks.forEach((link) => {
        link.addEventListener('click', handleClick);
      });
    });

</script>


<div class="slider-container mt-[6rem] min-h-[30rem] md:h-96 lg:h-96">
  <div class="slider-box active">
    <div class=" absolute inset-0 bg-gray-900 opacity-50"></div>
    <img class="sliderimg w-screen" src="/services/6.jpeg" alt="">

    <div class="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
  </div>
  <div class="slider-box">
    <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
    <img class="sliderimg w-screen" src="/services/4.jpeg" alt="">

      <div class="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
  </div>
  <div class="slider-box">
    <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
    <img class="sliderimg w-screen" src="/services/7.jpeg" alt="">

      <div class="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
  </div>
  <div class="slider-box">
    <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
    <img class="sliderimg w-screen" src="/services/8.jpeg" alt="">

      <div class="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
  </div>

  <div class="absolute inset-0 flex flex-col justify-center items-center ">
    <h1 class="text-white text-center px-[1rem] text-4xl md:text-5xl lg:text-5xl lg:px-[14rem] mb-4" style="line-height: 1.2">Providing Innovative Medical Solutions Globally.</h1>

    <p class="text-white text-center px-[1.5rem] text-lg md:text-xl lg:text-2xl lg:px-[11rem] mb-8">Stay ahead with our latest news on innovative medical equipment solutions and industry insights at Prezzo Shed Investments Limited.</p>
  </div>
</div>



<!-- 
 <div class="bg-gray-800 py-4">
    <div class="hidden md:block text-center">
      <a href="#" class="text-gray-400 hover:text-white px-3 py-2">All</a>
      <a href="#" class="text-gray-400 hover:text-white px-3 py-2">Innovations</a>
      <a href="#" class="text-gray-400 hover:text-white px-3 py-2">Industry News</a>
      <a href="#" class="text-gray-400 hover:text-white px-3 py-2">Testimonials</a>
      <a href="#" class="text-gray-400 hover:text-white px-3 py-2">Expert Insights</a>
    </div>
  </div>  -->

  <!-- <main class="container mx-auto my-8"> -->
    <main class="container  mx-auto my-8">

    <div class="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    

      {#each blog as item}
        <a href="/blog/{item.uuid}" class="animate-article  block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
          <img src="{item.banner}" alt="Blog post image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold mb-2">{item.title}</h2>
            <p class="text-gray-700 mb-4">{item.subtitle}</p>
            <span class="inline-block bg-[#00bfff] text-white px-3 py-1  text-sm font-medium">Industry News</span>
          </div>
        </a>
      {:else}
         <!-- empty list -->
      {/each}
     
<!-- 
      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/6.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Benefits of Regular Medical Equipment Maintenance</h2>
          <p class="text-gray-700 mb-4">As healthcare practitioners, we recognize the indispensable role that medical equipment holds in delivering superior...</p>
          <span class="inline-block bg-[#ff6347] text-white px-3 py-1  text-sm font-medium">Industry News </span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/5.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Vital Role of Regular Medical Equipment Maintenance</h2>
          <p class="text-gray-700 mb-4">In our capacity as medical experts, we fully appreciate the pivotal significance that medical equipment holds in ensuring...</p>
          <span class="inline-block bg-[#ffd700] text-white px-3 py-1  text-sm font-medium">Testimonials</span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/4.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Importance of Regular Medical Equipment Maintenance</h2>
          <p class="text-gray-700 mb-4">Being professionals in the healthcare industry, we acknowledge the crucial part played by medical equipment in delivering...</p>
          <span class="inline-block bg-[#ffd700] text-white px-3 py-1  text-sm font-medium">Testimonials</span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/3.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Key to Avoiding Costly Medical Equipment Repairs</h2>
          <p class="text-gray-700 mb-4">As experts in the medical field, we comprehend the essential nature of medical equipment in providing first-rate healthcare...</p>
          <span class="inline-block bg-[#8fbc8f] text-white px-3 py-1 text-sm font-medium">Expert Insights</span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/2.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Importance of Regular Medical Equipment Maintenance</h2>
          <p class="text-gray-700 mb-4">As healthcare specialists, we grasp the pivotal role that medical equipment plays in delivering top-quality healthcare services...</p>
          <span class="inline-block bg-[#ff6347] text-white px-3 py-1  text-sm font-medium">Industry News </span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/3.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Key to Avoiding Costly Medical Equipment Repairs</h2>
          <p class="text-gray-700 mb-4">As experts in the medical field, we comprehend the essential nature of medical equipment in providing first-rate healthcare...</p>
          <span class="inline-block bg-[#8fbc8f] text-white px-3 py-1 text-sm font-medium">Expert Insights</span>
        </div>
      </a>

      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/5.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">The Vital Role of Regular Medical Equipment Maintenance</h2>
          <p class="text-gray-700 mb-4">In our capacity as medical experts, we fully appreciate the pivotal significance that medical equipment holds in ensuring...</p>
          <span class="inline-block bg-[#ffd700] text-white px-3 py-1  text-sm font-medium">Testimonials</span>
        </div>
      </a>

      
      <a href="/blogpage" class="animate-article block shadow-md rounded-lg overflow-hidden hover:shadow-lg">
        <img src="services/8.jpeg" alt="Blog post image" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">Medical Equipment Maintenance and Better Patient Outcomes</h2>
          <p class="text-gray-700 mb-4">In our role as medical professionals, we comprehend the indispensable importance that medical equipment holds in ensuring superior...</p>
          <span class="inline-block bg-[#00bfff] text-white px-3 py-1 text-sm font-medium">Industry News</span>
        </div>
      </a>
      </div> -->


      <div class="pagination-container">
        <ul class="pagination">
          <li>
            <a href="#" class="previous">Previous</a>
          </li>
          {#each Array.from({ length: data.data.count }, (_, i) => i + 1) as page}
            <li>
              <a href="#" class="page {page === currentPage && 'active'}">{page}</a>
            </li>
          {/each}
          <li>
            <a href="#" class="next">Next</a>
          </li>
        </ul>
      </div>
  </main>


  <section class="bg-[#23286b] py-12 my-[3rem]">
    <div class="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      <h1 class="text-4xl font-bold mb-6 text-center text-white">Get the Latest Updates</h1>
      <p class="text-gray-400 mb-12 text-center">Sign up for our newsletter to stay up-to-date with our latest news and updates.</p>
      <form class="flex flex-col md:flex-row justify-center md:justify-start">
        <div class="flex-1 md:w-3/4 lg:w-2/3">
          <input type="email" placeholder="Enter your email" class="w-full bg-white focus:outline-none focus:shadow-outline md:rounded-l-3xl border border-gray-300 py-3 px-4 text-gray-900 mb-6">
        </div>
        <div class="flex-initial md:w-auto">
          <button type="submit" class="bg-[#1BC668] hover:bg-blue-900 text-white font-semibold py-[.8rem] md:rounded-r-3xl px-6 shadow-lg transition-all duration-200 ease-in-out">Subscribe</button>
        </div>
      </form>
    </div>
  </section>


<div class="container mx-auto px-6 lg:px-12 py-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="col-span-2">
      <h1 class="text-3xl font-bold mb-8">Featured Article</h1>
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img class="w-full h-64 object-cover object-center" src="/services/6.jpeg" alt="Article Image">
        <div class="px-6 py-4">
          <h2 class="text-lg font-semibold mb-2">
            7 Essential Medical Equipment Every Healthcare Facility Must Have
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/blogpage" class="text-blue-500 hover:text-blue-700 font-semibold">
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <h2 class="text-2xl font-bold mb-8">Popular Articles</h2>
      <ul class="divide-y divide-gray-300">
        <li class="py-4">
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            How to Choose the Right Medical Equipment for Your Practice
          </a>
          <div class="text-gray-500 text-sm mt-2">April 28, 2023</div>
        </li>
        <li class="py-4">
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            The Future of Medical Equipment: Trends and Predictions
          </a>
          <div class="text-gray-500 text-sm mt-2">April 15, 2023</div>
        </li>
        <li class="py-4">
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            Affordable Medical Equipment for Small Clinics
          </a>
          <div class="text-gray-500 text-sm mt-2">March 30, 2023</div>
        </li>
        <li class="py-4">
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            Affordable Medical Equipment for Small Clinics
          </a>
          <div class="text-gray-500 text-sm mt-2">March 30, 2023</div>
        </li>
        
      </ul>
    </div>
  </div>
</div>

<style>
.animate-article {
  transition: transform 0.2s ease-in-out;
}

.animate-article:hover {
  transform: translateY(-5px);
}


.slider-container {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }
    
    .slider-box {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 100%;
      transition: left 0.5s cubic-bezier(0.2, 1, 0.3, 1);
    }
    
    .slider-box.active {
      left: 0;
    }
    
    .slider-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: transparent;
      border: none;
      font-size: 24px;
      color: white;
      cursor: pointer;
    }
    
    .prev-button {
      left: 10px;
    }
    
    .next-button {
      right: 10px;
    }
    .sliderimg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }












    .pagination-container {

display: flex;

justify-content: center;

align-items: center;

margin-top: 40px;

}

.pagination {

display: flex;

justify-content: center;

align-items: center;

list-style: none;

margin: 0;

padding: 0;

}

.pagination li {

margin: 0 5px;

}

.pagination li a {

display: block;

padding: 5px 10px;

background-color: #fff;

border: 1px solid #23286b;

border-radius: 3px;

color: black;

text-decoration: none;

transition: background-color 0.2s ease;

}

.pagination li a:hover {
color: #fff;
background-color: #23286b;

}

.pagination li a.active {

background-color: #23286b;

color: #fff;

}

.pagination li a.disabled {

opacity: 0.5;

pointer-events: none;

}

.pagination li a.previous,

.pagination li a.next {

font-weight: bold;

}


</style>
  
