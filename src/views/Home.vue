<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'vue-sonner'
import { ArrowRightCircle, Mail } from "lucide-vue-next";
import { Toaster } from '@/components/ui/sonner'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { onMounted, ref } from "vue";
var email: string;
function Subscribe() {
    //email 空值检验
    const hypercolSubscribeHook = 'http://www.hypercol.cn/subscribe';
    var success = false;
    var errorMsg: string;
    if (email) {
        errorMsg = 'Empty input.'

        const jsonData = {
            email: email, // Add other relevant data if needed
        };
        fetch(hypercolSubscribeHook, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            },
            body: JSON.stringify(jsonData), // Convert JSON object to string
        })
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                console.info(data.msg)
                if (data.msg == 'success') {
                    success = true;
                    console.info('true')
                } else {
                    errorMsg = data.msg;
                }
            }) // Log response data
            .catch(error => {
                errorMsg = error;
            }) // Handle errors
            .then(() => {
                if (success) {
                    toast('Successful Subscribe', {
                        description: 'We will notice you the motion and achievements at ' + email,
                        action: {
                            label: 'Contact directly',
                            onClick: () => {
                                const emailAddress = 'support@minegraph.cn'; // Replace with your actual email address
                                const subject = 'Interested in MGCCPP'; // Replace with your desired email subject
                                const body = 'Hello,\n\nI would like to get in touch with you.\n\nBest regards'; // Replace with your desired email body
                                const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                window.location.href = mailtoLink;
                            },
                        },
                    })
                } else {

                    toast('Error', {
                        description: errorMsg,

                    })
                }

            });
    }



}

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];
const authors = ref([]);
const works = ref([]);

const fetchData = async () => {
    try {
        const response = await fetch('http://www.hypercol.cn/update', {
            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            }
        });
        const data = await response.json();
        authors.value = data.authors;
        works.value = data.works;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>
<template>
    <Toaster />
    <div id="header-container" class="h-svh content-center" style="padding: 5em">
        <div id="header-logo" class="absolute h-full bg-cover w-full top-0 right-0" style="
                background-image: url(https://s2.loli.net/2023/11/29/iH1mlfOEUoSjuFv.png);
                background-position: 50vh 50%;
                background-repeat: no-repeat;
                z-index: auto;
            "></div>
        <div id="header-warpper" class=" relative flex flex-col items-center content-center text-center z-auto">
            <div id="header-content" class="">
                <h1 class=" " style="font-size: 10svw;line-height: 1.2;">
                    MGC Copyright Protect Project
                </h1>
                <p class=" mt-32 mb-4">
                    Make it easy to sale and to claim Minecraft UGC copyright in China.
                </p>
                <a href="mailto:support@minegraph.cn">
                    <Button class="mt-4">
                        <Mail class="w-4 h-4 mr-2" />
                        Contact us
                    </Button>
                </a>
            </div>
        </div>
    </div>
    <section>
        <div id="cpp-introduction" class="flex flex-col self-center items-center text-3xl">
            <h2 style="" class="text-5xl">Your copyright is in protect.</h2>
            <a href="/solution">
                <Button class="mt-4">
                    <ArrowRightCircle class="w-4 h-4 mr-2" />
                    See Details
                </Button>
            </a>

            <div class="flex">
                <div class=" bg-amber-400 flex-1">
                    <h3>Advocate authority</h3>
                    <p>
                        We will observe the network and appeal the infringing
                        content to stop and punish infringement and plagiarism
                        of your works in China.
                    </p>
                    <p>
                        Comparisons will be made, down to each image and model,
                        and a detailed comparison report will be given for use
                        in court proceedings.
                    </p>
                </div>
                <div class="flex-1">
                    <h3>Get money back</h3>
                    <p>
                        Our team of attorneys refused to mediate and appealed
                        the infringer to the courts until an apology and
                        compensation were obtained.
                    </p>
                </div>
                <div class="flex-1">
                    <h3>Get more money</h3>
                    <p>
                        We can distribute your work on our own platform (MGC)
                        and on other third-party sponsored platforms (such as
                        NetEase and Afdian) to get a better grasp of the Chinese
                        market, while the ease of access makes players more
                        inclined to get officially-sourced work.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div id="cooperation" class="flex flex-col self-center items-center text-3xl">
            <h2 style="" class="text-5xl flex m-0">
                <span>
                    Trusted by
                    <span id="authorNumber" class="authorNumber px-4">
                        {{ authors.length }}
                    </span>
                    Authors &
                    <span id="authorNumber" class="authorNumber px-4">
                        {{ works.length }}
                    </span>
                    Times
                </span>
            </h2>

            <div>
                <div class="grid grid-cols-6">
                    <div v-for="author in authors" class=" m-2  bg-gray-100 p-3 text-center font-semibold">
                        {{ author }}
                    </div>
                </div>
                <div class="grid grid-cols-6">

                    <div v-for="work in works" class=" m-2  bg-amber-100 p-3 text-center font-thin">
                        {{ work }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div id="sign-for-news" class="flex flex-col self-center items-center mx-auto">
            <h2>Sign up for our news</h2>
            <form class="flex w-full max-w-sm mx-auto gap-1.5 mb-8" @submit.prevent="Subscribe">
                <Input id=" email" type="email" placeholder="Email" v-model="email" />
                <Button type="submit"> Subscribe </Button>
            </form>

            <p>Let make UGC intellectual property protection globally.</p>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-size: 4rem;
    line-height: 1;
    margin: 5%;
    text-align: center;
}

h3 {
    font-size: 2rem;
    line-height: 1;
}

p {
    font-size: 1.25rem;
}



#cpp-introduction .flex>div {
    flex: 1;
    /* Make child divs share available space equally */
    margin: 20px;
    /* Add spacing between child divs */
    padding: 2.5rem;
    padding-bottom: 4rem;
    border-radius: 2rem;


}

#cpp-introduction .flex>div>h3 {
    margin-bottom: 3rem;
    line-height: 1.2;
}
</style>
