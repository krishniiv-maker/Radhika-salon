/* =========================================================
   RADHIKA'S SALON
   SERVICE MENU
   PRICES REMOVED
========================================================= */


/* =========================================================
   ICONS
========================================================= */

const icons = {

    "Thread Work": "✦",
    "Waxing": "◇",
    "Bleach Services": "✧",
    "Clean Up": "○",
    "Facial": "✦",
    "Manicure & Pedicure": "♡",
    "Body Polishing": "◇",
    "B-Wax": "✧",
    "Hair": "⌁",
    "Makeover & Hair Do": "◌"

};


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "YOURWHATSAPPNUMBER";

function whatsappLink() {

    return `https://wa.me/${WHATSAPP_NUMBER}`;

}


/* =========================================================
   MENU DATA
   ORIGINAL PRICE-LIST STRUCTURE
   PRICES REMOVED
========================================================= */

const menu = {


    /* =====================================================
       THREAD WORK
    ===================================================== */

    "Thread Work": {

        "Thread": [

            { name: "Threading" },
            { name: "Upper Lips" },
            { name: "Forehead" }

        ],

        "Normal Wax": [

            { name: "Threading" },
            { name: "Upper Lips" },
            { name: "Forehead" }

        ],

        "Rica Wax": [

            { name: "Upper Lips" },
            { name: "Nose" },
            { name: "Forehead" },
            { name: "Chin" },
            { name: "Full Face" }

        ]

    },


    /* =====================================================
       WAXING
    ===================================================== */

    "Waxing": {

        "Normal Wax": [

            { name: "Full Arms" },
            { name: "Half Legs" },
            { name: "Full Legs" }

        ],

        "Rica Wax": [

            { name: "Full Arms" },
            { name: "Half Legs" },
            { name: "Full Legs" }

        ]

    },


    /* =====================================================
       BLEACH SERVICES
    ===================================================== */

    "Bleach Services": {

        "D-Tan Bleach": [

            { name: "Face D-Tan RAGA" },
            { name: "Full Arms D-Tan" },
            { name: "Foot D-Tan" },
            { name: "Back D-Tan" },
            { name: "Full Body" }

        ],

        "Face Bleach": [

            { name: "Protein" },
            { name: "Derma" },
            { name: "Oxy" }

        ],

        "Full Body Bleach": [

            { name: "Ubtan Bleach" },
            { name: "Protein Bleach" }

        ],

        "Arms & Foot Bleach": [

            { name: "Arms Bleach" },
            { name: "Foot Bleach" }

        ]

    },


    /* =====================================================
       CLEAN UP
    ===================================================== */

    "Clean Up": {

        "Clean Up": [

            { name: "Basic" },
            { name: "Aloevera" },
            { name: "Ozone" },
            { name: "Flower" },
            { name: "Papaya" },
            { name: "Kanpeki" }

        ]

    },


    /* =====================================================
       FACIAL
    ===================================================== */

    "Facial": {

        "Basic": [

            { name: "Fruit" },
            { name: "Aloevera" },
            { name: "Papaya" },
            { name: "Argan Oil" },
            { name: "Protein" },
            { name: "Bio-Whitening" }

        ],

        "Premium": [

            { name: "Gold" },
            { name: "Platinum" },
            { name: "Derma" },
            { name: "Maskmelon" },
            { name: "Japanese Facial Ritual" },
            { name: "Korean Skin" },
            { name: "Hydrating Facial" },
            { name: "Anti-Ageing" }

        ]

    },


    /* =====================================================
       MANICURE & PEDICURE
    ===================================================== */

    "Manicure & Pedicure": {

        "Manicure": [

            { name: "Normal" },
            { name: "O3+ Gel" }

        ],

        "Pedicure": [

            { name: "Normal" },
            { name: "O3+ Gel" }

        ]

    },


    /* =====================================================
       BODY POLISHING
    ===================================================== */

    "Body Polishing": {

        "Body Polish": [

            { name: "Body Polish" }

        ]

    },


    /* =====================================================
       B-WAX
    ===================================================== */

    "B-Wax": {

        "B-Wax": [

            { name: "Normal" },
            { name: "Rica" }

        ]

    },


    /* =====================================================
       HAIR
    ===================================================== */

    "Hair": {

        "Shampoo": [

            { name: "Shampoo" },
            { name: "Shampoo + Conditioner" },
            { name: "Shampoo + Mask + Blow Dryer" }

        ],

        "Hair Spa": [

            { name: "L'Oreal Mythic" },
            { name: "Aqua" },
            { name: "Treatment Spa" }

        ],

        "Hair Cut": [

            { name: "One Length (Straight)" },
            { name: "U Only Back" },
            { name: "Full Haircut" },
            { name: "Haircut with Dryer" }

        ],

        "Hair Treatments": [

            { name: "Keratin" },
            { name: "Hair Botox" }

        ]

    },


    /* =====================================================
       MAKEOVER & HAIR DO
    ===================================================== */

    "Makeover & Hair Do": {

        "Makeup": [

            { name: "Party Makeup with Hairstyle" },
            { name: "Saree Draping" }

        ],

        "Hair Style": [

            { name: "Pressing" },
            { name: "Crimping" },
            { name: "Open Curls" },
            { name: "Hair Do" },
            { name: "Trendy Hair Style" }

        ]

    }

};


/* =========================================================
   APP
========================================================= */

const app =
    document.getElementById("menu-app") ||
    document.getElementById("app");


/* =========================================================
   NAVIGATION
========================================================= */

let navigationStack = [
    { screen: "home" }
];


function syncHistoryState(route, method = "push") {

    const url = new URL(window.location.href);

    if (route.screen === "home") {
        url.searchParams.delete("group");
    } else if (route.group) {
        url.searchParams.set("group", route.group);
    }

    if (method === "push") {
        window.history.pushState(route, "", url);
    } else {
        window.history.replaceState(route, "", url);
    }

}


function goBackOneStep() {

    if (window.history.length > 1) {
        window.history.back();
        return;
    }

    showHome();

}


/* =========================================================
   PUSH ROUTE
========================================================= */

function pushRoute(screen, payload = {}) {

    const route = {
        screen,
        ...payload
    };

    navigationStack.push(route);
    syncHistoryState(route, "push");

}


/* =========================================================
   HOME
========================================================= */

function showHome() {

    if (!app) return;

    navigationStack = [
        { screen: "home" }
    ];

    if (window.history.state?.screen !== "home") {
        syncHistoryState({ screen: "home" }, "replace");
    }


    app.innerHTML = `

        <div class="menu-page-heading">

            <span class="menu-page-eyebrow">
                EXPLORE OUR SERVICES
            </span>

            <h2>
                Beauty,<br>
                <em>Your Way.</em>
            </h2>

            <p>
                Explore our services and discover
                everything Radhika's Salon has to offer.
            </p>

        </div>

    `;


    Object.keys(menu).forEach(
        (category, index) => {

            const card =
                document.createElement("div");

            card.className =
                "service-card";


            const subCategories =
                Object.keys(menu[category]);


            const preview =
                subCategories
                    .slice(0, 3)
                    .join(" • ");


            card.innerHTML = `

                <div class="card-content">

                    <span class="card-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div class="card-title">

                        ${icons[category] || "✦"}

                        ${category}

                    </div>

                    <div class="card-subtitle">
                        ${preview}
                    </div>

                </div>

                <span class="arrow">
                    →
                </span>

            `;


            card.addEventListener(
                "click",
                () => {

                    pushRoute(
                        "subcategory",
                        { category }
                    );

                    showSubCategory(category);

                }
            );


            app.appendChild(card);

        }
    );


    /* =====================================================
       BRIDAL / CUSTOM SERVICES
    ===================================================== */

    const bridal =
        document.createElement("div");


    bridal.className =
        "contact-service-block";


    bridal.innerHTML = `

        <div>

            <span class="contact-label">
                BRIDAL & CUSTOM SERVICES
            </span>

            <h3>
                Bridal Makeup<br>
                & Packages
            </h3>

        </div>

        <div>

            <p>
                Bridal makeup and customised packages
                are available according to your
                requirements.
            </p>

            <a
                href="${whatsappLink()}"
                target="_blank"
                rel="noopener noreferrer"
            >
                CONTACT NOW
                <span>→</span>
            </a>

        </div>

    `;


    app.appendChild(bridal);

}


/* =========================================================
   SUB-CATEGORIES
========================================================= */

function showSubCategory(category) {

    if (!app) return;

    const subCategories = Object.keys(menu[category]);

    /* =====================================================
       IF CATEGORY HAS ONLY ONE SUBCATEGORY
       AND IT HAS THE SAME / SIMILAR NAME,
       SKIP THAT EXTRA LEVEL
    ===================================================== */

    if (
        subCategories.length === 1 &&
        subCategories[0].toLowerCase().replace(/[^a-z]/g, "") ===
        category.toLowerCase().replace(/[^a-z]/g, "")
    ) {

        showServices(
            category,
            subCategories[0]
        );

        return;
    }


    app.innerHTML = `

        <button
            class="back-btn"
            type="button"
        >
            ← Back
        </button>

        <div class="menu-page-heading">

            <span class="menu-page-eyebrow">
                ${category}
            </span>

            <h2>
                Choose a<br>
                <em>Service.</em>
            </h2>

            <p>
                Select a category below to
                explore the available services.
            </p>

        </div>

        <div class="subcategory-list"></div>

    `;


    document
        .querySelector(".back-btn")
        .addEventListener(
            "click",
            () => {

                navigationStack.pop();

                showHome();

            }
        );


    const list =
        document.querySelector(
            ".subcategory-list"
        );


    subCategories.forEach(
        (sub, index) => {

            const card =
                document.createElement("div");

            card.className =
                "service-card";


            card.innerHTML = `

                <div class="card-content">

                    <span class="card-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div class="card-title">
                        ${sub}
                    </div>

                </div>

                <span class="arrow">
                    →
                </span>

            `;


            card.addEventListener(
                "click",
                () => {

                    navigationStack.push({
                        screen: "services",
                        category: category,
                        sub: sub
                    });

                    showServices(
                        category,
                        sub
                    );

                }
            );


            list.appendChild(card);

        }
    );
}

/* =========================================================
   SERVICES
========================================================= */

function showServices(
    category,
    sub
) {

    if (!app) return;


    const services =
        menu[category][sub];


    app.innerHTML = `

        <button
            class="back-btn"
            type="button"
        >
            ← Back
        </button>


        <div class="menu-page-heading">

            <span class="menu-page-eyebrow">
                ${category}
            </span>

            <h2>
                ${sub}
            </h2>

        </div>


        <div class="service-list"></div>

    `;


    document
        .querySelector(".back-btn")
        .addEventListener(
            "click",
            () => {
                goBackOneStep();
            }
        );


    const list =
        document.querySelector(
            ".service-list"
        );


    services.forEach(
        (service, index) => {

            const row =
                document.createElement("div");


            row.className =
                "service-row";


            row.innerHTML = `

                <span class="service-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="service-name">
                    ${service.name}
                </span>

            `;


            list.appendChild(row);

        }
    );


    /* =====================================================
       HAIR TREATMENT NOTE
    ===================================================== */

    if (
        category === "Hair" &&
        sub === "Hair Treatments"
    ) {

        const note =
            document.createElement("div");


        note.className =
            "service-note";


        note.innerHTML = `

            <strong>
                Treatment according to need of hair
            </strong>

            <p>
                Hair treatments are customised according
                to the condition and requirements of your hair.
            </p>

        `;


        app.appendChild(note);

    }

}


/* =========================================================
   MAIN WEBSITE SERVICE NAVIGATION
========================================================= */

const serviceGroups = {

    wax: [
        "Waxing",
        "B-Wax"
    ],

    facials: [
        "Clean Up",
        "Facial",
        "Bleach Services"
    ],

    hair: [
        "Hair"
    ],

    makeup: [
        "Makeover & Hair Do"
    ]

};


function openServiceGroup(group) {

    if (!group || !serviceGroups[group]) {
        return false;
    }

    const categories = serviceGroups[group];

    if (!app) {
        return false;
    }

    navigationStack = [
        {
            screen: "group",
            group: group
        }
    ];

    if (window.history.state?.screen !== "group" || window.history.state?.group !== group) {
        syncHistoryState({ screen: "group", group }, "replace");
    }

    const titles = {
        wax: "Wax",
        facials: "Facials",
        hair: "Hair Care",
        makeup: "Makeup"
    };

    const descriptions = {
        wax: "Explore our waxing services.",
        facials: "Explore our skin and facial services.",
        hair: "Explore our hair care services.",
        makeup: "Explore our makeup and styling services."
    };

    app.innerHTML = `

        <button
            class="back-btn"
            type="button"
            onclick="goBackOneStep()"
        >
            ← Back
        </button>

        <div class="menu-page-heading">

            <span class="menu-page-eyebrow">
                OUR SERVICES
            </span>

            <h2>
                ${titles[group]}
            </h2>

            <p>
                ${descriptions[group]}
            </p>

        </div>

        <div class="subcategory-list"></div>

    `;

    const list =
        document.querySelector(".subcategory-list");

    categories.forEach(
        (category, index) => {

            if (!menu[category]) {
                return;
            }

            const card =
                document.createElement("div");

            card.className =
                "service-card";

            const subCategories =
                Object.keys(menu[category]);

            card.innerHTML = `

                <div class="card-content">

                    <span class="card-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div class="card-title">
                        ${icons[category] || "✦"}
                        ${category}
                    </div>

                    <div class="card-subtitle">
                        ${subCategories.join(" • ")}
                    </div>

                </div>

                <span class="arrow">
                    →
                </span>

            `;

            card.addEventListener(
                "click",
                () => {

                    navigationStack.push({
                        screen: "subcategory",
                        category: category
                    });

                    syncHistoryState({ screen: "subcategory", category }, "push");
                    showSubCategory(category);

                }
            );

            list.appendChild(card);

        }
    );

    return true;
}


window.addEventListener("popstate", (event) => {

    const state = event.state || { screen: "home" };

    if (state.screen === "services") {
        showServices(state.category, state.sub);
        return;
    }

    if (state.screen === "subcategory") {
        showSubCategory(state.category);
        return;
    }

    if (state.screen === "group") {
        openServiceGroup(state.group);
        return;
    }

    showHome();

});


const urlParams =
    new URLSearchParams(
        window.location.search
    );

const selectedGroup =
    urlParams.get("group");


if (selectedGroup) {

    window.history.replaceState(
        { screen: "group", group: selectedGroup },
        "",
        window.location.href
    );
    openServiceGroup(selectedGroup);

} else {

    window.history.replaceState(
        { screen: "home" },
        "",
        window.location.href
    );
    showHome();

}
