var wrap = document.getElementsByClassName("wrap")[0];
var as = wrap.getElementsByTagName("a")
var ps = wrap.getElementsByTagName("p")

for (var i = 0; i < as.length; i++) {
    as[i].index = i;

    as[i].onclick = function (event) {
        event.preventDefault();


        for (var j = 0; j < as.length; j++) {
            as[j].className = ''
        }
        this.className = "active"
        for (var j = 0; j < ps.length; j++) {
            ps[j].className = ''
        }
        ps[this.index].className = "active"
    }
}