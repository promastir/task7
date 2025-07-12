
 
 
        const quotes = [
            {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                text: "Life is what happens when you're busy making other plans.",
                author: "John Lennon"
            },
            {
                text: "In the middle of every difficulty lies opportunity.",
                author: "Albert Einstein"
            },
            {
                text: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                author: "Winston Churchill"
            },
            {
                text: "Be yourself; everyone else is already taken.",
                author: "Oscar Wilde"
            },
            {
                text: "You miss 100% of the shots you don't take.",
                author: "Wayne Gretzky"
            },
            {
                text: "The only limit to our realization of tomorrow is our doubts of today.",
                author: "Franklin D. Roosevelt"
            }
        ];

        const change_text = document.querySelector(".p0");
        const change_author = document.querySelector(".author");
        const change_button = document.querySelector(".button");

        function random() {
            const random_ = Math.floor(Math.random() * quotes.length);
            change_text.innerText = quotes[random_].text;
            change_author.innerText = quotes[random_].author;
        }

        change_button.addEventListener('click', random);
        window.addEventListener("load", random);
    