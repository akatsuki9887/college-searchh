// Sample data for colleges
const colleges = [
    {
        name: "Harvard University",
        location: "Cambridge, MA",
        courses: ["Engineering", "Law", "Business", "Medicine"],
        description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts."
    },
    {
        name: "Stanford University",
        location: "Stanford, CA",
        courses: ["Engineering", "Business", "Law", "Education"],
        description: "Stanford University is known for its academic strength, wealth, and proximity to Silicon Valley."
    },
    {
        name: "MIT",
        location: "Cambridge, MA",
        courses: ["Engineering", "Computer Science", "Physics"],
        description: "Massachusetts Institute of Technology is a top-rated private institution known for its research and innovation."
    }
];

// Function to search and display college details
document.getElementById('search-bar').addEventListener('input', function (event) {
    const query = event.target.value.toLowerCase();
    const collegeDetails = document.getElementById('college-details');

    const matchedCollege = colleges.find(college => college.name.toLowerCase().includes(query));

    if (matchedCollege) {
        collegeDetails.innerHTML = `
            <h2>${matchedCollege.name}</h2>
            <p><strong>Location:</strong> ${matchedCollege.location}</p>
            <p><strong>Courses:</strong> ${matchedCollege.courses.join(', ')}</p>
            <p>${matchedCollege.description}</p>
        `;
    } else {
        collegeDetails.innerHTML = `<p>No results found</p>`;
    }
});
