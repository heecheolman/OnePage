import './../css/common.css';
import $ from 'jquery';
import 'fullpage.js';


$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'footPage'],
    menu: '#myMenu',
    scrollingSpeed: 700,
    showActiveTooltip: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Company', 'Service', 'Family', 'News', 'Contact', 'Footer'],
    afterRender: function () {
      setInterval(function () {
        $.fn.fullpage.moveSlideRight();
      }, 3000);
    }
  });
});

