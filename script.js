// Function to show selected section and hide others
function showSection(sectionId) {

    // Get all sections
    let sections = document.querySelectorAll("section");

    // Hide all sections first
    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId).classList.remove("hidden");
    document.getElementById(sectionId).classList.add("active");
}