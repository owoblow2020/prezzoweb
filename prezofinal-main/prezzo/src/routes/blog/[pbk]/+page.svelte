<script lang="ts">
  import { mediaurl } from '$lib/config';
  export let data;

  console.log(data);
  
</script>

<div class="container mb-[4rem] mt-[5rem] mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between py-6">
      <div class="md:w-1/2 px-3">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">{data.data.title}</h1>
        <p class="text-[#23286b]">By {data.data.author}</p>
      </div>
      <div class="md:w-1/2 flex justify-end">
        <img class="w-20 h-20 object-cover rounded-full" src="/services/author.jpg" alt="Author">
      </div>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <img class="w-full object-cover h-64 mb-4" src="{mediaurl}{data.data.banner}" alt="Article Image">
      <p class="text-gray-700 text-lg leading-relaxed mb-6 pl-3 pr-2">{@html data.data.article}</p>
     
    </div>
  </div>
  