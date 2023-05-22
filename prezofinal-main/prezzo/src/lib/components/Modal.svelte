<script>
    import { Pop } from "$lib/utilities/popup";

    const pop = new Pop()

    export let modalid
</script>

<!-- <div id="{modalid}" class="hidden bg-[#ffffff]  bg-[rgba(0,0,0,0.1)] w-full h-full inset-0 fixed items-center justify-center z-50 flex-col p-[34px]">

    <div class="bg-[#ffffff] rounded-[20px] shadow-sm w-[400px] h-full lg:w-[60rem] lg:h-[60rem]">
        <div class="flex w-full justify-between flex-row-reverse p-3">
           
            <i on:click="{()=>{pop.ToggleWind(modalid,'hidden')}}" class='bx bx-x text-[2rem] hover:cursor-pointer' ></i>
        </div>
        <slot></slot>
    </div>

</div> -->


<div id="{modalid}" class=" C hidden bg-[#ffffff]  bg-[rgba(0,0,0,0.1)] w-full h-full inset-0 fixed items-center justify-center z-50 flex-col p-[20px] sm:p-[34px]">

    <div class="modalfix1 bg-[#ffffff] rounded-[20px] shadow-sm w-full h-full lg:w-[60rem] lg:h-[60rem] sm:max-w-[90%] sm:h-auto overflow-y-auto">
        <div class="modalfix2 flex w-full justify-between flex-row-reverse p-3">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i on:click="{()=>{pop.ToggleWind(modalid,'hidden')}}" class='bx bx-x text-[2rem] hover:cursor-pointer' ></i>
        </div>
        <slot><!-- optional fallback --></slot>
    </div>

</div>


<style>
    @media (max-width: 640px){
        .modalfix{
            padding: 10px;
        }
        .modalfix1{
            max-width: 100%;
        }
    }
</style>