document.ready(function () {
    const amenities = {};
    $("li input[type='checkbox']").change(function() {
        if (this.checked) {
            amenities[this.dataset.name] = this.dataset.id;
        } else {
            delete amenities[this.dataset.name];
        }
        const names = Object.keys(amenities);
        if (names.length > 0) {
            $(".amenities h4").text(names.sort().join(', '));
        } else {
            $(".amenities h4").html('&nbsp;');
        }
    });
});