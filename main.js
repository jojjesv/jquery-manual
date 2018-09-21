const items = [{
  header: '.on',
  title: 'Kopplar på eventhantering',
  code: `$(element).on("click", clickHandler);`,
  setupEvalOnTarget: `.on('click', () => alert('I was clicked!'))`,
  evalOnTarget: `.click();`,
}, {
  header: '.hide',
  title: 'Gömmer ett element med frivillig övergång',
  code: `$(element).hide(animationDuration?);`,
  setupEvalOnTarget: null,
  evalOnTarget: `.hide(500);`,
}, {
  header: '.show',
  title: 'Visar ett element med frivillig övergång',
  code: `$(element).show(animationDuration?);`,
  setupEvalOnTarget: `.hide()`,
  evalOnTarget: `.show(500);`,
}, {
  header: '.attr',
  title: 'Tilldelar ett attribut',
  code: `$(element).attr();`,
  setupEvalOnTarget: null,
  evalOnTarget: `.attr('style', 'font-size:28px;');`,
}, {
  header: '.closest',
  title: 'Hittar den första elementet som är en föregångare och som matchar en selektor',
  code: `$(element).closest();`,
  setupEvalOnTarget: null,
  evalOnTarget: `.closest('.example').css('background', '#CE93D8');`,
}, {
  header: '.prev',
  title: 'Hittar det förgående närliggande elementet som matchar selektor',
  code: `$(element).prev(selector);`,
  setupEvalOnTarget: null,
  evalOnTarget: `.prev('button').addClass('btn-danger').removeClass('btn-primary');`,
}, {
  header: '.toggle',
  title: 'Gömmer ifall synligt och tvärtom ifall gömt',
  code: `$(element).toggle(animationDuration?);`,
  setupEvalOnTarget: null,
  evalOnTarget: `.toggle(500);`,
}, {
  header: '.append',
  title: 'Lägger till ett barnelement',
  code: `$(element).append(child);`,
  setupEvalOnTarget: null,
  evalOnTarget: `.append('<img src="http://decentdesign.co.uk/wp-content/uploads/2017/11/decent-logo-retina.png" />');`,
}, {
  header: '.remove',
  title: 'Tar bort från förälderelementet',
  code: `$(element).remove();`,
  setupEvalOnTarget: null,
  evalOnTarget: `.remove();`
}, {
  header: '.animate',
  title: 'Animerar ett element mha. requestAnimationFrame',
  code: `$(element).animate(properties);`,
  setupEvalOnTarget: null,
  evalOnTarget: `.animate({ fontSize: 80, opacity: 0.75 });`
}];

$(() => {
  $('#cards').append(
    items.map(i => {
      let id = i.header.toLowerCase().replace(/\./gi, '');

      i.id = id;

      return $('<div class="card">')
        .append(
          $('<div class="card-header">').text(i.header)
        ).append(
          $('<div class="card-body">')
            .append(
              $('<h5 class="card-title">').text(i.title)
            )
            .append(
              $('<p class="card-text">').append(
                `<span>Användning:</span><br/>`
              ).append(
                $('<code></code>').html(i.code)
              )
            )
            .append(
              $('<div class="example">').append(
                $('<button type="button" class="btn btn-primary">')
                  .attr('id', 'b-' + id)
                  .text(`Testa ${i.header}`)
              ).append(
                $('<p class="target">Klicka ovanför</p>')
              )
            )
        )
    })
  )

  items.forEach(i => {
    eval(`
      $('#b-${i.id}').click(function() {
        $(this).next('.target')${i.evalOnTarget}
      })${i.setupEvalOnTarget ? `.next('.target')${i.setupEvalOnTarget}` : ''}
    `);
  })
})