<<<<<<< HEAD
var gitbook = window.gitbook;

function showLoading(p) {
    gitbook.state.$book.addClass('is-loading');
    p.always(function() {
        gitbook.state.$book.removeClass('is-loading');
    });

    return p;
}

module.exports = {
    show: showLoading
};
=======
var gitbook = window.gitbook;

function showLoading(p) {
    gitbook.state.$book.addClass('is-loading');
    p.always(function() {
        gitbook.state.$book.removeClass('is-loading');
    });

    return p;
}

module.exports = {
    show: showLoading
};
>>>>>>> b35682879c9b64e32d4f1e144bc858a4a4ee39c8
