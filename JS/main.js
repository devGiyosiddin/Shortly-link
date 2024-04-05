const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results ');

if (elUrlShortenerForm) {
    elUrlShortenerForm.addEventListener('submit', function (evt){
        evt.preventDefault();

        elUrlShortenerResults.classList.add('url-shortener__results--open');
    })
    
};
if (elUrlShortener) {
    elUrlShortener.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-copy-short-link-button')){
            // Change button text
            evt.target.textContent = 'Copied';

            // Change button bg color
            evt.target.classList.add('button-copied-bg');

            // Copy short link Clipboard
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

            // Reset button text and class after 1s
            setTimeout(function (){
                evt.target.textContent = 'Copy';
                evt.target.classList.remove('button-copied-bg')
            }, 2000);
        }
    });
}

// DARK-THEME
const elSitenavMenuBtn = document.querySelector('.sitenav-menu');
const elSitenavLIst = document.querySelector('.sitenav__list');

if (elSitenavMenuBtn) {
    elSitenavMenuBtn.addEventListener('click', function () {
        elSitenavLIst.classList.toggle('sitenav__list--open');
    });
}