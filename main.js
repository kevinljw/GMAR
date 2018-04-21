$( document ).ready(function() {
    console.log( "ready!" );
    $('#yOne').click(function() {
      console.log( "selected!" );
    });
});

var targetEl = document.querySelector('#target');
targetEl.addEventListener('click', function() {
  targetEl.setAttribute('color', {color: 'red'});
    console.log( "selected!" );
});