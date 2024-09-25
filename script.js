
function toggleDropdown() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-bar').value;
    alert('Searching for: ' + query);
    
});

document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
document.addEventListener('DOMContentLoaded', () => {

    const heading = document.getElementById('vince');
    const introDiv = document.getElementById('intro-text');
    
    const introText = `
        <p>Vince stands at the forefront of Pakistan’s personal care industry, distinguished as the country's first brand to offer a comprehensive range of skincare and hair color solutions. Renowned for its innovation and commitment to quality. </p>
    `;
    
   
    heading.addEventListener('mouseover', () => {
        introDiv.innerHTML = introText;
    });
    
    
    heading.addEventListener('mouseout', () => {
        introDiv.innerHTML = '';
    });
});
function showAlert(name, date, stars, comment) {
    alert(`Name: ${name}\nDate: ${date}\nRating: ${stars}\nComment: ${comment}`);
}


function showAlert(name, date, stars, comment) {
    document.getElementById("alertName").textContent = name;
    document.getElementById("alertDate").textContent = `Date: ${date}`;
    document.getElementById("alertStars").textContent = stars;
    document.getElementById("alertComment").textContent = comment;
    document.getElementById("customAlert").style.display = "flex";
}

document.getElementById("closeAlert").onclick = function() {
    document.getElementById("customAlert").style.display = "none";
};