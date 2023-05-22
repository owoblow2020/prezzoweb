<script lang="ts">
	import { Pop } from '$lib/utilities/popup';
    import Banner from "$lib/components/Banner.svelte";
    import Partners from "$lib/components/Partners.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import axios from "axios";


    const pop = new Pop()

    let data = {}
    let busy:boolean

    const RequestQuote = async ()=>{
        try {
            console.log('test');
            
            busy=true;
            const response = await axios.post('/api/quote',data)
            console.log(response);
            
            if(response.status==201){
                busy = false;
                alert("Quote submitted!!")
                data = {}
                return
            } 
            alert("something went wrong!!!")           
        } catch (error) {
            alert(error)
            
        }
   
    }
</script>


<Banner/>
<Partners/>



<div class="flex flex-col">

    <div class="flex flex-col items-center lg:flex-row justify-between p-3 lg:m-[10rem]">
        <div class='w-[300px] lg:w-[30rem]'>
                <img src="banner2.png" alt="" srcset="">
        </div>
    
        <div class="flex flex-col gap-4">
            <h1 class='text-2xl font-semibold w-full lg:text-4xl lg:font-bold'>Sustainable Medical Equipment from Prezzo</h1>
            <span class='mt-[1rem]  w-full font-normal text-slate-500 text-base lg:w-[600px]'>
                Prezzo offers affordable, reliable, and sustainable medical equipment solutions for healthcare professionals and facilities. Our products include Cold-Chain Solutions, Blood Management Solutions, Walk-In Cold rooms, Renewable Energy Devices, and Medical Waste Incinerators.
    
                We guarantee on-time delivery and competitive pricing, without sacrificing quality. Plus, our commitment to sustainability means that we offer medical waste incinerators and renewable energy devices to reduce healthcare's carbon footprint.
    
                Trust Prezzo to provide the best medical equipment for your needs. Request a quote today and let us be your partner in healthcare.
            </span>
            <a href="" class="flex items-center justify-center bg-[#23286b] font-bold text-white h-[3rem] w-[10rem] rounded-md lg:h-[4rem] lg:w-[15rem]" on:click={()=>{pop.ToggleWind('quote','flex')}}>Request Quote</a>
    
        </div>
    </div>
    

    
    
    
    <div class="flex  items-center flex-col-reverse mt-[5rem] p-3 lg:flex-row justify-between lg:m-[10rem]">
      
    
        <div class="flex flex-col gap-4 p-3">
            <h1 class='text-2xl font-semibold w-full lg:text-4xl lg:font-bold'>Prezzo Shed - Where Customer Satisfaction is Our Top Priority</h1>
            <span class='mt-[1rem]  w-full font-normal text-slate-500 text-base lg:w-[600px]'>
                We at Prezzo Shed take pride in offering the best products and services to prospective and regular customers. Our service slogan is "aim to please", signalling the unbridled effort we put into ensuring a satisfying experience from the commencement of a project to finish.

            </span>
            <!-- svelte-ignore a11y-invalid-attribute -->

            <div class="flex gap-4">
                <a href="" class="flex items-center justify-center bg-[#23286b] font-bold text-white h-[3rem] w-[10rem] rounded-md lg:h-[4rem] lg:w-[15rem]" on:click={()=>{pop.ToggleWind('quote','flex')}}>Request Quote</a>
                <a href="/product" class="flex items-center justify-center bg-white border-[#23286b] border font-bold text-[#23286b] h-[3rem] w-[10rem] rounded-md lg:h-[4rem] lg:w-[15rem]" on:click={()=>{pop.ToggleWind('quote','flex')}}>Products</a>

            </div>
    
        </div>




        <div class='w-[300px] lg:w-[30rem]'>
            <img src="banner3.png" alt="" srcset="">
        </div>

    </div>


    

</div>


<div class="flex flex-col h-[30rem] w-full mt-[5rem] pt-[2rem] bg-[#FEFEFF] lg:p-[5rem]">
    <div class="flex flex-col p-3">
        <h1 class="text-left  font-extrabold text-4xl lg:text-3xl lg:font-bold">FOR A SAFER TOMORROW</h1>
        <span class="text-left font-medium text-base">Protecting Our Future, One Step at a Time</span>
    </div>

    <div class="w-full flex overflow-auto gap-4 mt-[1rem] p-3 lg:w-[1100px]">
            <img src="services/1.jpeg" alt="" srcset="">
            <img src="services/2.jpeg" alt="" srcset="">
            <img src="services/3.jpeg" alt="" srcset="">
            <img src="services/4.jpeg" alt="" srcset="">
            <img src="services/5.jpeg" alt="" srcset="">
            <!-- <img src="services/6.jpeg" alt="" srcset=""> -->
            <img src="services/7.jpeg" alt="" srcset="">
            <img src="services/8.jpeg" alt="" srcset="">










    </div>


</div>



<div class="flex h-[10rem]  w-full bg-[#21466D] p-3 mt-[5rem] mb-[8rem] lg:p-[2rem] lg:justify-center lg:items-center lg:h-[5.5rem] lg:mt-[0]">

    <div class="flex flex-col gap-4 lg:flex-row">
        <h1 class="text-[#FEFEFF] font-bold">Discover Reliable and Sustainable Medical Equipment Solutions with Prezzo Today!</h1>
        <a href="/product" class="h-[3rem] w-[12rem] bg-[#FEFEFF] text-[#21466D] flex justify-center items-center font-semibold">Purchase from Prezzo</a>
    </div>

</div>

  


  
  


<Modal  modalid='quote'>
    <div class="modalfix flex flex-col gap-4 mx-[1rem] lg:mx-[4rem] lg:mb-[1rem] p-0 lg:p-3">

        <h1 class='text-[#23286b] text-center font-bold text-lg lg:text-[1.88rem]'>Request a Quote</h1>

        <div class='flex  flex-col gap-1 lg:gap-1 lg:items-center'>
            <span class="font-light text-xs text-center lg:text-base lg:p-1">
                At Prezzo, we can help you find the best prices and availability for your needs with our network of verified suppliers.
            </span>
            <span class="font-light text-xs text-center lg:p-1 lg:text-base">
                We can provide 1000 cases of gloves delivered tomorrow or establish a contract with a respirator manufacturer for the next year.
            </span>
            <span class="font-light text-xs text-center lg:p-1 lg:text-base">
                Fill out your information below and we'll find the right suppliers for you. With Prezzo, you can trust you're getting the best pricing and availability.
            </span>
            <!-- <span class="font-light text-xs text-center lg:p-1 lg:text-base">
                Please fill out the form below and we'll get back to you as soon as possible.
            </span> -->
        </div>
        

        <form on:submit|preventDefault={RequestQuote} class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <span class="text-[#23286b] text-lg font-semibold">Name</span>
                <input bind:value={data.full_name} type="text" class="w-full h-[2.5rem] border border-[#23286b] p-3" required>
            </div>

            <div class="flex flex-col gap-2 w-full lg:flex-row">
                <div class="flex flex-col gap-2 w-full">
                    <span class="text-[#23286b] text-lg font-semibold">Email</span>
                    <input bind:value={data.email} type="email" class="w-full h-[2.5rem] border border-[#23286b] p-3" required>
                </div>

                <div class="flex flex-col gap-2 w-full">
                    <span class="text-[#23286b] text-lg font-semibold">Phone number</span>
                    <input bind:value={data.phone_number} type="phone" class="h-[2.5rem] border border-[#23286b] p-3" required>
                </div>
            </div>


            <div class="flex flex-col gap-2">
                <span class="text-[#23286b] text-lg font-semibold">What can we help you with</span>

                <textarea bind:value={data.message} name="" id=""  class="w-full h-[6rem] border border-[#23286b] p-3" required></textarea>
            </div>

            {#if !busy}
                    <button type="submit" class="h-[2.5rem] w-[10rem] bg-[#23286b] text-white">Sumbit Quote</button>

            {:else}
                  <button disabled type="submit" class="h-[2.5rem] w-[10rem] bg-[#23286b] text-white flex justify-center items-center"><i class='bx bx-loader bx-spin text-white text-[1rem]' ></i></button>

            {/if}

        </form>

    </div>

</Modal>


<!-- 
<Modal  modalid='quote'>
    <div class="flex flex-col gap-4 mb-[4rem] mx-[2rem] p-0 lg:p-3">

        <h1 class='text-[#23286b] text-center font-bold text-lg lg:text-[1.88rem]'>Request a Quote</h1>

        <div class='flex flex-col gap-1 lg:gap-1 lg:items-center'>
            <span class="font-light text-xs text-center lg:text-base lg:p-1">
                At Prezzo, we can help you find the best prices and availability for your needs with our network of verified suppliers.
            </span>
            <span class="font-light text-xs text-center lg:p-1 lg:text-base">
                We can provide 1000 cases of gloves delivered tomorrow or establish a contract with a respirator manufacturer for the next year.
            </span>
            <span class="font-light text-xs text-center lg:p-1 lg:text-base">
                Fill out your information below and we'll find the right suppliers for you. With Prezzo, you can trust you're getting the best pricing and availability.
            </span>
        </div>
        

        <form class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
                <span class="text-[#23286b] text-lg font-semibold">Name</span>
                <input type="text" class="w-full lg:w-auto h-[2.5rem] border border-[#23286b] p-3" required>
            </div>

            <div class="flex flex-col gap-2 lg:flex-row">
                <div class="flex flex-col gap-2 lg:w-1/2">
                    <span class="text-[#23286b] text-lg font-semibold">Email</span>
                    <input type="email" class="w-full h-[2.5rem] border border-[#23286b] p-3" required>
                </div>

                <div class="flex flex-col gap-2 lg:w-1/2">
                    <span class="text-[#23286b] text-lg font-semibold">Phone number</span>
                    <input type="phone" class="w-full h-[2.5rem] border border-[#23286b] p-3" required>
                </div>
            </div>


            <div class="flex flex-col gap-2">
                <span class="text-[#23286b] text-lg font-semibold">What can we help you with</span>

                <textarea name="" id=""  class="w-full h-[6rem] border border-[#23286b] p-3" required></textarea>
            </div>

            <button type="submit" class="h-[2.5rem] w-full sm:w-auto bg-[#23286b] text-white">Submit Quote</button>

        </form>

    </div>

</Modal> -->



<style>
    @media (max-width: 640px){
        .modalfixbtn{
            margin-bottom: 1rem;
        }
       
    }
</style>