document.addEventListener('DOMContentLoaded', function () {
    ['accordionExampleMain', 'accordionExampleRow'].forEach(function(id) {
        var accordion = document.getElementById(id);
        if (!accordion) return;
        accordion.addEventListener('show.bs.collapse', function (e) {
            var cardHeader = e.target.previousElementSibling;
            if (!cardHeader) return;
            var btn = cardHeader.querySelector('.accordion-btn .icon-toggle');
            if (btn) {
                btn.querySelector('.fa-plus').style.display = 'none';
                btn.querySelector('.fa-minus').style.display = '';
            }
        });
        accordion.addEventListener('hide.bs.collapse', function (e) {
            var cardHeader = e.target.previousElementSibling;
            if (!cardHeader) return;
            var btn = cardHeader.querySelector('.accordion-btn .icon-toggle');
            if (btn) {
                btn.querySelector('.fa-plus').style.display = '';
                btn.querySelector('.fa-minus').style.display = 'none';
            }
        });
        // Set initial state for any open panels
        accordion.querySelectorAll('.collapse.show').forEach(function (collapse) {
            var cardHeader = collapse.previousElementSibling;
            if (!cardHeader) return;
            var btn = cardHeader.querySelector('.accordion-btn .icon-toggle');
            if (btn) {
                btn.querySelector('.fa-plus').style.display = 'none';
                btn.querySelector('.fa-minus').style.display = '';
            }
        });
    });
});