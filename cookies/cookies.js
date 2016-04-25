(function() {

    var CONNECT_STACK_COOKIE_NAME = 'connectModuleStack',
        dontPopCookies = false;

    var setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = CONNECT_STACK_COOKIE_NAME + "=" + cvalue + "; " + expires; // + DateTime.MinValue;
    }

    var getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return JSON.stringify([]);
    }

    var popCookie = function (cname) {
        if (!dontPopCookies) {
            var cookie = JSON.parse(getCookie(CONNECT_STACK_COOKIE_NAME));
            if (cookie.indexOf(cname) !== -1) cookie.splice(cookie.indexOf(cname), 1);
            setCookie(CONNECT_STACK_COOKIE_NAME, JSON.stringify(cookie), 100000);
        }
        dontPopCookies = false;
    }

    var pushCookie = function (value) {
        var cookie = getCookie(CONNECT_STACK_COOKIE_NAME);
        var ms = (cookie) ? JSON.parse(cookie) : [];
        if (ms.indexOf(value) !== -1) ms.splice(ms.indexOf(value), 1);
        ms.unshift(value);
        setCookie(CONNECT_STACK_COOKIE_NAME,
            JSON.stringify(ms),
            100000);
    }

    var emptyCookie = function () {
        setCookie(CONNECT_STACK_COOKIE_NAME, JSON.stringify([]), 100000);
    }

    var emptyCookie = function () {
        setCookie(CONNECT_STACK_COOKIE_NAME, JSON.stringify([]), 100000);
    }

    var emptyCookie = function() {
        setCookie(CONNECT_STACK_COOKIE_NAME, JSON.stringify([]), 0);
    }

    $('#add').click(function() {
        console.log('add', $('#stackName').val());
        pushCookie($('#stackName').val());
    });

    $('#remove').click(function() {
        popCookie($('#stackName').val());
    });

    $('#empty').click(function() {
        emptyCookie();
    });

    $('#get').click(function() {
        console.log('cookie:', getCookie(CONNECT_STACK_COOKIE_NAME));

    });

})();