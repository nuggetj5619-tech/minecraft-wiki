/* =========================================
   MINECRAFT WIKI JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

function toggleMenu() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("open");

}


/* ---------- WIKI SEARCH ---------- */

const wikiPages = [

    {
        title: "Getting Started",
        description: "Learn the basics of Minecraft.",
        url: "articles/getting-started.html"
    },

    {
        title: "Your First Day",
        description: "Survive your first day and night.",
        url: "articles/first-day.html"
    },

    {
        title: "Crafting",
        description: "Learn how Minecraft crafting works.",
        url: "articles/crafting.html"
    },

    {
        title: "Mining",
        description: "Find ores and valuable resources.",
        url: "articles/mining.html"
    },

    {
        title: "Combat",
        description: "Fight monsters and survive hostile mobs.",
        url: "articles/combat.html"
    },

    {
        title: "Farming",
        description: "Grow crops and create renewable food.",
        url: "articles/farming.html"
    },

    {
        title: "The Nether",
        description: "Explore Minecraft's dangerous Nether dimension.",
        url: "articles/nether.html"
    },

    {
        title: "The End",
        description: "Prepare for the Ender Dragon.",
        url: "articles/end.html"
    }

];


function searchWiki() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.trim().toLowerCase();


    if (!query) {

        removeSearchResults();

        return;

    }


    const results =
        wikiPages.filter(page =>

            page.title
                .toLowerCase()
                .includes(query)

            ||

            page.description
                .toLowerCase()
                .includes(query)

        );


    showSearchResults(results);

}


function showSearchResults(results) {

    removeSearchResults();


    const box =
        document.createElement("div");

    box.className =
        "search-results";

    box.id =
        "searchResults";


    if (results.length === 0) {

        box.innerHTML = `
            <div class="search-result">
                No articles found.
            </div>
        `;

    } else {

        results.forEach(page => {

            box.innerHTML += `

                <a
                    class="search-result"
                    href="${page.url}"
                >

                    <strong>
                        ${page.title}
                    </strong>

                    <br>

                    <small>
                        ${page.description}
                    </small>

                </a>

            `;

        });

    }


    document.body.appendChild(box);

    box.style.display = "block";

}


function removeSearchResults() {

    const oldResults =
        document.getElementById("searchResults");

    if (oldResults) {

        oldResults.remove();

    }

}


/* ---------- LIVE SEARCH ---------- */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchWiki
    );


    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchWiki();

            }

            if (event.key === "Escape") {

                removeSearchResults();

                searchInput.blur();

            }

        }
    );

}


/* ---------- CLOSE SEARCH ---------- */

document.addEventListener(
    "click",
    function(event) {

        const results =
            document.getElementById("searchResults");

        const search =
            document.querySelector(
                ".search-container"
            );


        if (
            results &&
            search &&
            !search.contains(event.target)
        ) {

            removeSearchResults();

        }

    }
);
