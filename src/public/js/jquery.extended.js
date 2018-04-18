$.fn.hasAncestor = function(a) {
    return this.filter(function() {
        return !!$(this).closest(a).length;
    });
};

$.fn.hasNoAncestor = function(a) {
    return this.filter(function() {
        return !!$(this).closest(a).length == 0;
    });
};