// jquery code will goes here

$(document).ready(function(){
      $("#circle-1").Circlebar({
            maxValue: 20,
            fontSize: "14px",
            triggerPercentage: true
        });
        var t2 = new Circlebar({
            element: ".circle-2",
            maxValue: 252,
            dialWidth: 40,
            fontColor: "#777",
            fontSize: "30px",
            skin: "fire",
            type: "manual"
        });

        new Circlebar({
            element: "#circle-3",
            maxValue: 230,
            size: "240px",
            fontSize: "30px",
            type: "progress"
        });

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);
      
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

  });