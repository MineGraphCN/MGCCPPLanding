<template>
    <div id="header-container" class="h-svh content-center" style="padding: 5em">
        <div id="header-bg" class="absolute h-full bg-cover w-full top-0 right-0" style="
                background-image: url(https://s2.loli.net/2023/11/29/IGawVWK7EZztbh1.jpg);
                background-position: 50%;
                background-repeat: no-repeat;
                z-index: auto;
            "></div>
        <div id="header-warpper" class="relative flex items-center z-auto">
            <div id="header-content" class="text-white content-end">
                <h1 class=" " style="font-size: 4svw; line-height: 1.2">
                    🎉🎉We're a cohesive group of authors.🎉🎉
                </h1>
                <p class="mt-24 mb-4 text-left text-xl">
                    MGC is part of HyperCol for Minecraft Graphics Community.
                </p>
                <a href="https://www.minegraph.cn">

                    <Button class="mt-4 bg-amber-400" variant="outline">
                        <ArrowRightCircle class="w-4 h-4 mr-2" /> Our Website
                    </Button>
                </a>
            </div>
            <img src="https://s2.loli.net/2023/11/29/wfmV7Cr2IFSNetW.png" class=" " style="width: 40vh; height: 40vh" />
        </div>
    </div>
    <section>
        <ul class="" style="opacity: 1; transform: translate(0px, 0px)">
            <li name="block0" class="" style="opacity: 1; transform: translate(0px, 0px)">
                <span class="content6-icon"><img src="https://s2.loli.net/2023/11/29/SbsmjGMUxCBfw2R.png"
                        alt="img" /></span>
                <h2 class="content6-title lpjvfi92gh9-editor_css">
                    <p>Composition</p>
                </h2>
                <div class="content6-content">
                    <p>
                        A Minecraft graphics communication
                        community. Dedicated to using the theory
                        of Minecraft graphics to create a friendly
                        communication environment between creators and
                        players.
                    </p>
                </div>
            </li>
            <li name="block1" class="" style="opacity: 1; transform: translate(0px, 0px)">
                <span class="content6-icon"><img src="https://s2.loli.net/2023/11/29/SbsmjGMUxCBfw2R.png"
                        alt="img" /></span>
                <h2 class="content6-title lpjvfgwgemt-editor_css">
                    <p>Business</p>
                </h2>
                <div class="content6-content lpjvoaubjbs-editor_css">
                    <p>
                        Mainly in shaders,
                        resourcepacks. And the side business is mods,
                        architecture, terrain, and spin-off animations, and
                        has a cooperative relationship with the largest
                        of these organizations in China.
                    </p>
                </div>
            </li>
            <li name="block2" class="" style="opacity: 1; transform: translate(0px, 0px)">
                <span class="content6-icon"><img src="https://s2.loli.net/2023/11/29/SbsmjGMUxCBfw2R.png"
                        alt="img" /></span>
                <h2 class="content6-title lpjvfg5coi-editor_css">
                    <p>Works</p>
                </h2>
                <div class="content6-content">
                    <p>We correct misconceptions;</p>
                    <p>We popularize computer graphics;</p>
                    <p>We write tutorials on each subject;</p>
                    <p>We answer questions about games;</p>
                    <p>We organize regular public arteventvys.</p>
                </div>
            </li>
        </ul>
        <p class=" text-center text-2xl my-4" style="font-weight: 800;">A Corner of MGC</p>
        <img src="https://s2.loli.net/2023/12/01/zQybXdhe1oKS5Op.jpg" alt="">
    </section>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-vue-next";
</script>
<style scoped>
ul img {
    width: 2.5rem;
    vertical-align: middle;
    border-style: none;
    position: absolute;
    display: inline-block
}


ul p {
    margin-left: 55px;
}

ul li {
    margin-top: 4rem;

    margin-bottom: 4rem;
}

ul h2 {
    font-size: x-large;
}
</style>
