document.addEventListener("DOMContentLoaded", function() {
    showTab('home');
});
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active-tab');
    });
    document.getElementById(tabId).classList.add('active-tab');
}
