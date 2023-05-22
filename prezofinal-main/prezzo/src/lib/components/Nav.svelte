<script>
    import Logo from "./Logo.svelte";

    let showElement = false;
    
    function toggleElement() {
      showElement = !showElement;
    }


</script>
<div class="w-full h-[3.5rem] p-3 lg:py-0 fixed inset-0 bg-white lg:px-3 lg:h-[6rem] z-50">
    <div class='flex  justify-between w-full items-center lg:hidden'>
        <a href="/">
            <Logo/>
        </a>
        <!-- <h1 class="text-[#5C5DF8] text-xs">PREZZO SHED INVESTMENTS LTD</h1> -->
        <button on:click={toggleElement} class=" border-none outline-none lg:hidden">
            {#if !showElement}
            <i class='bx bx-menu text-[#23286b] text-xl text-[2.5rem] lg:hidden'></i>
            {:else}
            <i class='bx bx-x text-[#23286b] text-xl text-[2.5rem] lg:hidden'></i>
            {/if}
        </button>
    </div>


    <div  class=" overflow-hidden">


        <div id="element" class:show={showElement} class:return={!showElement} class='w-0 fixed flex flex-col bg-white pt-[4rem] lg:h-[6rem] h-full right-0 lg:relative lg:flex-row lg:p-0 lg:w-full lg:bg-transparent lg:justify-between lg:items-center ' >
            <a href="/">
                <h1 class=' hidden text-3xl font-bold lg:block'>Prezzo</h1>
            </a>
    
            <div class="flex gap-4 font-medium lg:font-bold flex-col lg:flex-row pl-[2rem] lg:pl-0">
                <a href="/" class='text-black  text-base font-medium lg:font-bold transition-all delay-300 duration-300 hover:text-[#23286b]'>Home</a>
    
                <a href="/about" class='text-black font-medium lg:font-bold text-base transition-all delay-300 duration-300 hover:text-[#23286b]'>About Us</a>
                
                <a href="/blog" class='text-black font-medium lg:font-bold text-base transition-all delay-300 duration-300 hover:text-[#23286b]'>News</a>

                <a href="/howitworks" class='text-black font-medium lg:font-bold text-base transition-all delay-300 duration-300 hover:text-[#23286b]'>Our Process</a>

                <a href="/contact" class='text-black font-medium lg:font-bold text-base transition-all delay-300 duration-300 hover:text-[#23286b]'>Contact Us</a>

                <a href="/product" class='text-black  text-base font-medium lg:font-bold transition-all delay-300 duration-300 hover:text-[#23286b]'>Product</a>
                
                <a href="/" class='text-black  text-base font-medium lg:font-bold transition-all delay-300 duration-300 hover:text-[#23286b]'>Brochures</a>
               
            </div>
    
            <a href="/about" class="flex bg-[#1BC668] h-[2.5rem] w-[9rem] justify-center items-center text-white font-medium lg:font-bold ml-[2rem] lg:ml-0 mr-[5rem] lg:mr-0 mt-[1.5rem] lg:mt-0 transition-all delay-300 duration-300 hover:bg-[#23286b]">Learn More</a>
    
        </div>
    </div>


</div>


<style>
    
    
    #element {
      animation-duration: 0.4s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    
    .show {
      animation-name: show-element;
    }
    
    .return {
      animation-name: return-element;
    }
    
    @keyframes show-element {
        0%{
                width: 0;
            }
            100%{
                width: 50%;
            }
        }
    
    @keyframes return-element {
        0%{
                width: 50%;
            }
            100%{
                width: 0;
            }
        }


        @media screen and (min-width: 1024px) {
  #element{
    position: relative;
    animation-duration: none;
    animation-timing-function: none;
    animation-fill-mode: none ;
  }
}
  </style>