
const pharmaPages = {
    tablet: {
        title: "Tablet Manufacturing",
        subtitle: "Pharmaceutical tablet development and manufacturing solutions.",
        overview: "Explore our approach to pharmaceutical tablet development, production planning and quality-focused manufacturing requirements.",
        features: [
            ["Tablet Formulation", "Support for formulation planning and product development requirements."],
            ["Compression Process", "Understanding tablet compression, process parameters and production requirements."],
            ["Coating Solutions", "Explore coating options based on product specifications."],
            ["Quality Evaluation", "Appropriate in-process checks and finished-product evaluation."],
            ["Packaging Options", "Packaging considerations for product protection and presentation."],
            ["Project Support", "Discuss product requirements and manufacturing feasibility."]
        ],
        process: "Tablet manufacturing requires coordinated formulation, processing, testing and packaging activities. Each project should be evaluated according to its product specifications and applicable regulatory requirements.",
        list: ["Product and formulation assessment", "Raw material evaluation", "Manufacturing process planning", "In-process quality checks", "Finished product evaluation"],
        quality: "Quality planning, documentation and appropriate testing are important throughout pharmaceutical tablet development and manufacturing."
    },

    capsule: {
        title: "Capsule Manufacturing",
        subtitle: "Capsule formulation and pharmaceutical manufacturing solutions.",
        overview: "Discover capsule manufacturing considerations, including formulation suitability, filling requirements, product evaluation and packaging.",
        features: [
            ["Capsule Formulation", "Formulation planning for suitable capsule dosage forms."],
            ["Capsule Filling", "Filling process considerations based on formulation characteristics."],
            ["Hard Gelatin Capsules", "Explore hard capsule product requirements and options."],
            ["Vegetarian Capsules", "Discuss suitable vegetarian capsule shell requirements."],
            ["Quality Evaluation", "Appropriate checks for capsule quality and performance."],
            ["Packaging Solutions", "Packaging options based on product requirements."]
        ],
        process: "Capsule production planning considers formulation properties, shell compatibility, filling parameters, quality checks and suitable packaging.",
        list: ["Formulation suitability assessment", "Capsule shell selection", "Filling process planning", "Quality evaluation", "Packaging assessment"],
        quality: "Capsule quality depends on suitable materials, controlled processing, documentation and product-specific testing."
    },

    syrup: {
        title: "Syrup & Liquid Manufacturing",
        subtitle: "Liquid pharmaceutical formulation and manufacturing solutions.",
        overview: "Explore liquid dosage form development and manufacturing requirements, including formulation, mixing, processing, testing and packaging.",
        features: [
            ["Liquid Formulation", "Formulation planning for suitable liquid dosage forms."],
            ["Syrup Development", "Product-specific syrup formulation considerations."],
            ["Mixing & Processing", "Process planning based on formulation characteristics."],
            ["Liquid Quality Testing", "Appropriate testing of product quality and specifications."],
            ["Filling & Packaging", "Container and packaging selection based on product needs."],
            ["Documentation", "Product-specific process and quality documentation."]
        ],
        process: "Liquid manufacturing requires careful consideration of formulation compatibility, mixing, processing, filling, packaging and appropriate product testing.",
        list: ["Formulation and ingredient assessment", "Process and mixing evaluation", "Product quality checks", "Filling and packaging planning", "Documentation review"],
        quality: "Liquid products require suitable controls and testing based on their formulation, intended use and applicable standards."
    },

    ointment: {
        title: "Ointment & Cream Manufacturing",
        subtitle: "Topical pharmaceutical formulation and manufacturing solutions.",
        overview: "Learn about topical dosage form development and manufacturing considerations for ointments, creams and related products.",
        features: [
            ["Cream Formulation", "Development planning for suitable cream formulations."],
            ["Ointment Formulation", "Product-specific ointment formulation considerations."],
            ["Emulsion Processing", "Processing considerations for suitable emulsion systems."],
            ["Texture & Consistency", "Evaluation of product appearance and physical characteristics."],
            ["Quality Assessment", "Appropriate product testing and quality checks."],
            ["Packaging Options", "Tube, jar and other suitable packaging considerations."]
        ],
        process: "Topical product manufacturing involves formulation design, material compatibility, processing, product evaluation and packaging selection.",
        list: ["Product and formulation assessment", "Material compatibility review", "Processing feasibility", "Physical quality evaluation", "Packaging assessment"],
        quality: "Topical products require product-specific quality evaluation, suitable documentation and testing under applicable requirements."
    },

    formulation: {
        title: "Pharmaceutical Formulation Development",
        subtitle: "From product concept to formulation development planning.",
        overview: "Explore formulation development support for pharmaceutical products, with attention to product objectives, ingredient compatibility and development requirements.",
        features: [
            ["Pre-formulation Assessment", "Review of product objectives and ingredient characteristics."],
            ["Formulation Design", "Planning formulation approaches for intended dosage forms."],
            ["Ingredient Compatibility", "Consideration of compatibility between formulation components."],
            ["Development Evaluation", "Product-specific evaluation during development."],
            ["Documentation Support", "Organised formulation and development records."],
            ["Scale-up Assessment", "Review of manufacturing feasibility and scale-up needs."]
        ],
        process: "Formulation development is a structured process that begins with product requirements and progresses through feasibility, development evaluation and manufacturing planning.",
        list: ["Product brief and target profile", "Ingredient and compatibility review", "Formulation planning", "Development evaluation", "Manufacturing feasibility assessment"],
        quality: "Development decisions should be supported by suitable documentation, scientific evaluation and relevant regulatory requirements."
    },

    contract: {
        title: "Contract Manufacturing",
        subtitle: "Pharmaceutical manufacturing partnership and project solutions.",
        overview: "Understand contract manufacturing project requirements, partner coordination, product specifications and manufacturing planning.",
        features: [
            ["Project Assessment", "Review of product requirements and project feasibility."],
            ["Product Planning", "Discussion of dosage form and product specifications."],
            ["Manufacturing Coordination", "Coordination of project and manufacturing requirements."],
            ["Quality Documentation", "Product-specific quality and documentation expectations."],
            ["Packaging Planning", "Packaging requirements and presentation options."],
            ["Partnership Support", "Communication throughout the project lifecycle."]
        ],
        process: "Contract manufacturing projects require clear product specifications, feasibility review, quality expectations, documentation and coordination between partners.",
        list: ["Initial project discussion", "Product specification review", "Feasibility assessment", "Quality and documentation planning", "Project coordination"],
        quality: "Every contract manufacturing project should be assessed against applicable licensing, facility, quality and regulatory requirements."
    },

    injectable: {
        title: "Injectable Manufacturing",
        subtitle: "Sterile pharmaceutical product development and manufacturing considerations.",
        overview: "Explore the specialised requirements associated with injectable products, including sterile processing, product specifications and quality planning.",
        features: [
            ["Sterile Product Planning", "Assessment of sterile product requirements."],
            ["Formulation Considerations", "Product-specific injectable formulation planning."],
            ["Aseptic Processing", "Understanding applicable aseptic processing requirements."],
            ["Sterility Assurance", "Sterility assurance and contamination control considerations."],
            ["Quality Testing", "Appropriate testing based on product specifications."],
            ["Packaging Systems", "Suitable container closure and packaging considerations."]
        ],
        process: "Injectable manufacturing requires specialised facilities, validated processes, contamination control and strict quality systems. Capabilities must be verified for each product and facility.",
        list: ["Product and regulatory assessment", "Formulation feasibility review", "Sterile process planning", "Quality and sterility assurance", "Container closure evaluation"],
        quality: "Injectable products require stringent quality systems, validated processes and compliance with applicable sterile manufacturing regulations."
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const key = document.body.dataset.pharmaPage;
    const page = pharmaPages[key];

    if (!page) {
        document.getElementById("pharmaTitle").textContent = "Pharmaceutical Manufacturing";
        return;
    }

    document.title = page.title + " | Cellartgen Lab Private Limited";

    document.querySelector('meta[name="description"]').content =
        page.overview;

    document.getElementById("pharmaTitle").textContent = page.title;
    document.getElementById("pharmaSubtitle").textContent = page.subtitle;
    document.getElementById("overviewTitle").textContent = page.title;
    document.getElementById("overviewText").textContent = page.overview;
    document.getElementById("processText").textContent = page.process;
    document.getElementById("qualityText").textContent = page.quality;

    const featureIcons = [
        "fa-flask", "fa-gears", "fa-vials",
        "fa-microscope", "fa-box-open", "fa-clipboard-check"
    ];

    document.getElementById("pharmaFeatures").innerHTML =
        page.features.map((feature, index) => `
            <article class="pharma-feature-card">
                <i class="fa-solid ${featureIcons[index]}"></i>
                <h3>${feature[0]}</h3>
                <p>${feature[1]}</p>
            </article>
        `).join("");

    document.getElementById("processList").innerHTML =
        page.list.map(item => `<li>${item}</li>`).join("");

    document.getElementById("pharmaYear").textContent =
        new Date().getFullYear();

    const images = {
        tablet: "img/verschiedene-medikamente-und-pillen-auf-weissem-hintergrund.webp",
        capsule: "img/21.jpg",
        syrup: "img/syrus-liquid-machine.png",
        ointment: "img/OUR WORKSPACE1.jpg",
        formulation: "img/about-lab.jpg",
        contract: "img/OUR WORKSPACE2.jpg",
        injectable: "img/doctor-performing-medical-research-lab-scaled.jpg"
    };

    document.getElementById("pharmaHeroImage").src = images[key] || "img/banner.png";
});
