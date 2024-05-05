import QACode from '@/components/QACode.vue';
<template>
    <header>
        <h1>Frequently Asked Questions</h1>
    </header>

    <main>
        <section class="faq-section">

            <h2>General Questions</h2>
            <div class="faq-item">
                <h3>Q: What is this website about?</h3>
                <p>This is a website that provides information and answers to frequently asked questions.</p>
            </div>
            <div class="faq-item">
                <h3>Q: How do I find answers to my questions?</h3>
                <p>You can browse through the categories or use the search bar to find specific questions.</p>
            </div>
            <div class="faq-item">
                <h3>Q: Can I submit my own questions?</h3>
                <p>Yes, you can submit your own questions by clicking on the "Submit Question" button.</p>
            </div>
        </section>

        <section class="faq-section">
            <h2>Product-Related Questions</h2>
            <div class="faq-item">
                <h3>Q: What are the features of this product?</h3>
                <p>This product has a variety of features, including...</p>
            </div>
            <div class="faq-item">
                <h3>Q: How do I use this product?</h3>
                <p>To use this product, follow these steps...</p>
            </div>
            <div class="faq-item">
                <h3>Q: What is the warranty for this product?</h3>
                <p>This product comes with a one-year warranty.</p>
            </div>
        </section>
    </main>

</template>
<style scoped>
/* Basic styling for the FAQ page */
body {
    font-family: sans-serif;
}

header {
    background-color: #f0f0f0;
    padding: 20px;
}

h1 {
    text-align: center;
}

main {
    padding: 20px;
}

.faq-section {
    margin-bottom: 30px;
}

.faq-item {
    margin-bottom: 30px;
}
</style>