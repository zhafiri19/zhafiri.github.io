/* navbar */
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click',function() {
nav.classList.toggle('slide')
})

/* membuat active link */
// tangkap element dengan class menu
const menu = document.querySelector("ul");
// jika element dengan class menu diklik
menu.addEventListener('click', function(e) {
// maka ambil element apa yang diklik oleh user
const targetMenu = e.target;
    // lalu cek, jika element itu adalah link dengan class menu__link
    if(targetMenu.classList.contains('menu__link')) { 
    // maka ambil menu link yang aktif
    const menuLinkActive = document.querySelector("ul li a.active");
    // lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
    if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
    // maka hapus class active pada menu yang sedang aktif
    menuLinkActive.classList.remove('active');
    }
    // terakhir tambahkan class active pada menu yang di klik oleh user
    targetMenu.classList.add('active');
    }
});