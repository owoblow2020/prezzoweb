




<script>
    export let data;
    console.log(data);

    let products = data.data.results
</script>



<h2 class=" mt-[8rem] lg:mt-[10rem] text-center text-2xl lg:text-4xl font-bold">Vaccine Cold Chain Solutions</h2>


<div class="  bg-white py-[2rem] mt-[1rem] lg:mt-[2rem] px-3 lg:p-[4rem] shadow-md">
    <span>
        Our range of offerings is aimed at minimizing the total cost of ownership and ensuring the vaccine's efficacy
        all the way to the final destination, even in extremely challenging conditions. Our product line consists of ice-lined
        refrigerators and freezers suitable for health centers facing power instability, solar-powered vaccine storage equipment,
        and durable transport systems that maintain cold temperatures for extended periods during lengthy journeys.
    </span>
</div>




<div class=" grid lg:grid-cols-3 grid-cols-1 my-[2rem] gap-[4rem] lg:my-[4rem] lg:gap-[3rem]">

    {#each products as item}
        <div class=" flex flex-col items-center">
            <img src="{item.image}" alt="">
            <a class=" text-[#23286b] text-xl lg:text-lg lg:font-semibold font-medium after:bg-[#23286b]  after:w-0 after:left--full after:h-[.15rem] after:flex after:hover:w-full transition-all after:delay-300 after:duration-300 after:hover:left-full"href="" >{item.name} </a>
        </div>
    {:else}
         <!-- empty list -->
    {/each}
 

    

</div>