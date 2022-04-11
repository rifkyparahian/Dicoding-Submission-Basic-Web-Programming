let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "thrift1") {
            event.target.setAttribute("src", "assets/image/thrift4.png");
            return;
        } else if (event.target.id === "thrift2") {
            event.target.setAttribute("src", "assets/image/thrift5.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "thrift1") {
            event.target.setAttribute("src", "assets/image/thrift1.png");
            return;
        }
        if (event.target.id === "thrift2") {
            event.target.setAttribute("src", "assets/image/thrift2.png");
            return;
        }
    });
}