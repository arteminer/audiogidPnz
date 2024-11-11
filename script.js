tgBtn = document.querySelector('.tg-btn');
tgLogo = document.querySelector('.tgLogo');
wsLogo = document.querySelector('.wsLogo');

let redirect = function(link){
    window.location.href = link;
};

tgBtn.addEventListener('click', () => redirect("https://t.me/audioguide58"));

tgLogo.addEventListener('click', () => redirect("https://t.me/audioguide58"));
wsLogo.addEventListener('click', () => redirect("https://wa.me/79374144123"));

/* page_direct section */

infoBtn = document.querySelector('.info-btn');

mainBtn = document.querySelector('.mainRedirect');

let page_redirect = function(object2show, object2hide){
    object2show.style.display = 'flex';
    object2hide.style.display = 'none';
}

indexPage = document.querySelector('.index')
recPage = document.querySelector('.records')

infoBtn.addEventListener('click', () => page_redirect(recPage, indexPage));
mainBtn.addEventListener('click', () => page_redirect(indexPage, recPage));