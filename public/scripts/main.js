

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          }
        });
      }
    }
  });

const skills = [
  { nome: 'React', p: 100, cor: '#53c1de'},
  { nome: 'Redux', p: 80, cor: '#7b4bc1'}
];

const skillsElem = document.querySelector('#skills');

skills.forEach( i => {
  skillsElem.innerHTML += `
          <div class="skillbar clearfix " data-percent="${i.p}%">
            <div class="skillbar-title" style="background: ${i.cor};"><span>${i.nome}</span></div>
            <div class="skillbar-bar" style="background: ${i.cor};"></div>
            <div class="skill-bar-percent">${i.p}%</div>
          </div> <!-- End Skill Bar -->`
});



$('.skillbar').each(function(){
  jQuery(this).find('.skillbar-bar').animate({
    width: $(this).attr('data-percent')
  },6000);
});

function isScrolledIntoView(el) {
  const { top, bottom } = el.getBoundingClientRect()
  return top >= 0 && bottom <= window.innerHeight
}