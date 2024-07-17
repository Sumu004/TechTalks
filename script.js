document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    const newsData = [
        {
            title: "Apple Introduces Vision Pro, a Revolutionary Mixed Reality Headset",
            source: "The Verge",
            link: "https://www.theverge.com/",
            description: "Apple has unveiled the Vision Pro, a cutting-edge mixed reality headset that blends the virtual and real worlds. Featuring advanced sensors, high-resolution displays, and seamless integration with iOS devices, the Vision Pro promises to revolutionize augmented reality applications."
        },
        {
            title: "Google’s AI Language Model, Gemini, Outperforms GPT-4",
            source: "TechCrunch",
            link: "https://techcrunch.com/",
            description: "Google’s new AI language model, Gemini, has been shown to outperform OpenAI’s GPT-4 in various benchmarks. With improved natural language understanding and generation capabilities, Gemini is set to enhance Google’s AI-driven products and services."
        },
        {
            title: "Tesla’s Full Self-Driving Beta Expands to All North American Customers",
            source: "Wired",
            link: "https://www.wired.com/",
            description: "Tesla has announced that its Full Self-Driving (FSD) beta is now available to all North American customers. This expansion marks a significant step towards achieving fully autonomous driving, though the company advises drivers to remain vigilant while using the system."
        },
        {
            title: "Microsoft Acquires OpenAI in Landmark Deal",
            source: "The Verge",
            link: "https://www.theverge.com/",
            description: "In a historic move, Microsoft has acquired OpenAI, the research lab behind the popular GPT models. This acquisition is expected to accelerate Microsoft’s AI development and integration across its suite of products, from Azure to Office 365."
        },
        {
            title: "Amazon Unveils Astro, a Home Robot Assistant",
            source: "TechCrunch",
            link: "https://techcrunch.com/",
            description: "Amazon has introduced Astro, a home robot assistant designed to help with everyday tasks. Equipped with advanced navigation, facial recognition, and voice commands, Astro aims to become an integral part of the smart home ecosystem."
        },
        {
            title: "Samsung’s Galaxy Z Fold 4 Sets New Standard for Foldable Phones",
            source: "CNET",
            link: "https://www.cnet.com/",
            description: "Samsung has launched the Galaxy Z Fold 4, the latest iteration of its foldable phone series. Featuring a more durable design, enhanced multitasking capabilities, and improved camera performance, the Galaxy Z Fold 4 sets a new standard in the foldable phone market."
        },
        {
            title: "Facebook Rebrands as Meta, Focuses on Metaverse Development",
            source: "The Verge",
            link: "https://www.theverge.com/",
            description: "Facebook has rebranded itself as Meta, signaling its commitment to developing the metaverse. This virtual reality space aims to blend digital and physical worlds, enabling new forms of social interaction, work, and entertainment."
        },
        {
            title: "IBM Launches Quantum Computing Cloud Platform",
            source: "TechCrunch",
            link: "https://techcrunch.com/",
            description: "IBM has launched a new quantum computing cloud platform, offering businesses and researchers access to powerful quantum processors. This platform aims to accelerate the development of quantum applications in fields like cryptography, materials science, and artificial intelligence."
        },
        {
            title: "Intel Unveils 12th Gen Alder Lake Processors",
            source: "Wired",
            link: "https://www.wired.com/",
            description: "Intel has unveiled its 12th generation Alder Lake processors, which feature a hybrid architecture combining high-performance and high-efficiency cores. These processors promise significant improvements in performance and power efficiency for both desktops and laptops."
        },
        {
            title: "Sony’s PlayStation 5 Pro Rumored to Launch Next Year",
            source: "CNET",
            link: "https://www.cnet.com/",
            description: "Rumors are circulating that Sony plans to launch a PlayStation 5 Pro next year. Expected to feature enhanced graphics, faster load times, and improved VR capabilities, the PS5 Pro aims to cement Sony’s dominance in the next-gen console market."
        }
    ];

    newsData.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        const title = document.createElement("h2");
        title.textContent = article.title;

        const source = document.createElement("p");
        source.innerHTML = `Source: <a href="${article.link}" target="_blank">${article.source}</a>`;

        const description = document.createElement("p");
        description.textContent = article.description;

        articleElement.appendChild(title);
        articleElement.appendChild(source);
        articleElement.appendChild(description);

        newsContainer.appendChild(articleElement);
    });
});
