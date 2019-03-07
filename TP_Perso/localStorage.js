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
      $("#donnee").append("<table><tr><th>Clé</th><th>Valeur</th></tr><tr><td>Prénom</td><td>"+sessionStorage.getItem("prenom")+"</td></tr><tr><td>Nom</td><td>"+sessionStorage.getItem("nom")+"</td></tr><tr><td>Date</td><td>"+sessionStorage.getItem("date")+"</td></tr><tr><td>Ville</td><td>"+sessionStorage.getItem("ville")+"</td></tr><tr><td>Mail</td><td>"+sessionStorage.getItem("mail")+"</td></tr><tr><td>Message</td><td>"+sessionStorage.getItem("message")+"</td></tr></table>");
      $("#donnee").append("<a href='index.html'><input type='button' name='clear' value='Clear' id='clearBtn'></a>");

      $("#clearBtn").click(function(){
        sessionStorage.clear();
      });
    }

  }
});
