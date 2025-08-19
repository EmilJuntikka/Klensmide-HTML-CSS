let previousClickedDiv = null;

function clickedDate(id) {
    var clickedDiv = document.getElementById(id);

    if (previousClickedDiv && previousClickedDiv !== clickedDiv) {
        previousClickedDiv.style.backgroundColor = ''; 
    }
    clickedDiv.style.backgroundColor = "#119100";

    previousClickedDiv = clickedDiv;
}
