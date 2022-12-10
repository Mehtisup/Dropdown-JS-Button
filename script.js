<script>
function clickFunction() {
    document.getElementById("myList").classList.toggle("click");
    document.getElementById("arrow").classList.toggle("ck");
}

window.onclick = function(event) {
    if (!event.target.matches('.button')) {
        var items = document.getElementsByClassName("list");
        var i;
        for (i = 0 ; i < items.length ; i++) {
            var myItem = items[i];
            if (myItem.classList.contains('click')) {
                myItem.classList.remove('click');
            }
        }
    }
}
</script>
