$(document).ready(function(){
  $(".contact").submit(function(){
    var prenom = $("input[name='prenom']").val();
    var nom = $("input[name='nom']").val();
    var date = $("input[name='date']").val();
    var ville = $("input[name='ville']").val();
    var mail = $("input[name='mail']").val();
    var message = $("textarea[name='message']").val();
    sessionStorage.setItem("prenom",prenom);
    sessionStorage.setItem("nom",nom);
    sessionStorage.setItem("date",date);
    sessionStorage.setItem("ville",ville);
    sessionStorage.setItem("mail",mail);
    sessionStorage.setItem("message",message);
  });

  if (typeof sessionStorage!='undefined') {
    if (sessionStorage.getItem("prenom") != null) {
      $("#donnee").append("<table>");
      $("#donnee").append("<tr><td>Prénom</td><td>"+sessionStorage.getItem("prenom")+"</td></tr>");
      $("#donnee").append("<tr><td>Nom</td><td>"+sessionStorage.getItem("nom")+"</td></tr>");
      $("#donnee").append("<tr><td>Date</td><td>"+sessionStorage.getItem("date")+"</td></tr>");
      $("#donnee").append("<tr><td>Ville</td><td>"+sessionStorage.getItem("ville")+"</td></tr>");
      $("#donnee").append("<tr><td>Mail</td><td>"+sessionStorage.getItem("mail")+"</td></tr>");
      $("#donnee").append("<tr><td>Message</td><td>"+sessionStorage.getItem("message")+"</td></tr>");
      $("#donnee").append("</table>");
      $("#donnee").append("<a href='test.html'><input type='button' name='clear' value='Clear' id='clearBtn'></a>");

      $("#clearBtn").click(function(){
        sessionStorage.clear();
      });
    }

  }
});
