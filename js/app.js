var app;
app = {
 
 
    init: function() {
        $('.modal').modal();
        $(".button-collapse").sideNav();
        $('#message').characterCounter();
        $('body').on('submit', 'form', app.submitForm);
        //app.timer();
        //alert(_notify_plugin);
 
    },
    notifyController: function(text, typeofnotify = "info") {
        //var _notify_plugin="Materialize"; //SIMPLE/DEFAULT
        //var _notify_plugin="iziToast"; //ADVANCED
 
        if (typeof jsalerts == "undefined") {
            jsalerts = form.find('input[name=jsform]').val();
            if (typeof jsalerts == "undefined") {
                jsalerts = 0;
            }
        }
 
        if (jsalerts == 1) {
 
            if (_notify_plugin == "Materialize") {
                Materialize.toast(text, 3000);
            } else
            if (_notify_plugin == "iziToast") {
 
 
 
                if (typeof lng == "undefined") {
                    lng = form.find('input[name=lng]').val();
                    if (typeof lng == "undefined") {
                        lng = 'en';
                    }
                }
                if (lng == 'ru') {
                    var $alert_error = 'Error';
                    var $alert_success = 'Success';
                    var $alert_warning = 'Warning';
                    var $alert_information = 'Information';
 
                } else
 
                if (lng == 'cn') {
                    var $alert_error = 'Error';
                    var $alert_success = 'Success';
                    var $alert_warning = 'Warning';
                    var $alert_information = 'Information';
                } else
 
                if (lng == 'en') {
                    var $alert_error = 'Error';
                    var $alert_success = 'Success';
                    var $alert_warning = 'Warning';
                    var $alert_information = 'Information';
                } else {
                    var $alert_error = 'Error';
                    var $alert_success = 'Success';
                    var $alert_warning = 'Warning';
                    var $alert_information = 'Information';
                }
 
 
 
 
                if (typeofnotify == "error") {
                    iziToast.error({
                        title: $alert_error,
                        message: text,
                        theme: 'light',
                        position: 'topRight',
                        titleSize: '24',
                        messageSize: '14',
                        maxWidth: '377',
                        icon: false,
                        timeout: 5000,
                        transitionIn: 'fadeInLeft',
                        transitionOut: 'fadeOutRight',
                        transitionInMobile: 'fadeInLeft',
                        transitionOutMobile: 'fadeOutLeft'
                    });
                } else
                if (typeofnotify == "success") {
                    iziToast.success({
                        title: $alert_success,
                        message: text,
                        theme: 'light',
                        position: 'topRight',
                        titleSize: '24',
                        messageSize: '14',
                        maxWidth: '377',
                        icon: false,
                        timeout: 5000,
                        transitionIn: 'fadeInLeft',
                        transitionOut: 'fadeOutRight',
                        transitionInMobile: 'fadeInLeft',
                        transitionOutMobile: 'fadeOutLeft'
                    });
                } else
                if (typeofnotify == "warning") {
                    iziToast.warning({
                        title: $alert_warning,
                        message: text,
                        theme: 'light',
                        position: 'topRight',
                        titleSize: '24',
                        messageSize: '14',
                        maxWidth: '377',
                        icon: false,
                        timeout: 5000,
                        transitionIn: 'fadeInLeft',
                        transitionOut: 'fadeOutRight',
                        transitionInMobile: 'fadeInLeft',
                        transitionOutMobile: 'fadeOutLeft'
                    });
                } else
                if (typeofnotify == "info") {
                    iziToast.info({
                        title: $alert_information,
                        message: text,
                        theme: 'light',
                        position: 'topRight',
                        titleSize: '24',
                        messageSize: '14',
                        maxWidth: '377',
                        icon: false,
                        timeout: 5000,
                        transitionIn: 'fadeInLeft',
                        transitionOut: 'fadeOutRight',
                        transitionInMobile: 'fadeInLeft',
                        transitionOutMobile: 'fadeOutLeft'
                    });
                }
 
            } else {
                Materialize.toast(text, 3000);
            }
 
 
        }
 
 
    },
    submitForm: function(e) {
        var form = $(this);
        //var lng;
        var itajax;
        itajax = form.find('input[name=ajax]').val();
        //lng = form.find('input[name=lng]').val();
 
        if (typeof lng == "undefined") {
            lng = form.find('input[name=lng]').val();
            if (typeof lng == "undefined") {
                lng = 'en';
            }
        }
 
        if (itajax == 1) {
 
            e.preventDefault();
            var submitBtn = form.find('button');
            var str = form.serialize(),
                type = form.find('input[name=do]').val();
 
            submitBtn.attr('disabled', 'disable');
 
            $.ajax({
                url: "/" + lng + "/ajax",
                type: "POST",
                data: str,
                success: function(data) {
                    var res = $.parseJSON(data);
 
                    app.authCtrl(res);
 
 
                    if (typeof res.callback !== "undefined") {
                        app.callback(res.callback);
                    }
 
                    if (typeof(reload_captcha) === "function") {
 
                        if (typeof password_input !== "undefined") {
                            form.find('input[name=password]').attr('disabled', 'disable');
                        }
                        if (typeof password_repeat_input !== "undefined") {
                            form.find('input[name=password_repeat]').attr('disabled', 'disable');
                        }
                        if (typeof captcha_input !== "undefined") {
                            form.find('input[name=captcha]').attr('disabled', 'disable');
                        }
 
                        setTimeout(function() {
                            reload_captcha('captcha');
                            submitBtn.removeAttr('disabled');
 
                            captcha_input = form.find('input[name=captcha]').val();
                            password_input = form.find('input[name=password]').val();
                            password_repeat_input = form.find('input[name=password_repeat]').val();
 
 
 
                            if (typeof password_input !== "undefined") {
                                form.find('input[name=password]').val('');
                                form.find('input[name=password]').removeAttr('disabled');
                            }
                            if (typeof password_repeat_input !== "undefined") {
                                form.find('input[name=password_repeat]').val('');
                                form.find('input[name=password_repeat]').removeAttr('disabled');
                            }
                            if (typeof captcha_input !== "undefined") {
                                form.find('input[name=captcha]').val('');
                                form.find('input[name=captcha]').removeAttr('disabled');
                            }
 
 
 
                        }, 3000);
                    } else {
                        setTimeout(function() {
                            if (!(res.reload === 'true')) {
                                submitBtn.removeAttr('disabled');
                            }
                        }, 200);
                    }
 
                    if (res.run === 'true') {
                        setTimeout(function() {
                            $('body').before(res.html);
                        }, 3000);
                    }
 
 
 
 
 
                },
                error: function() {
                    app.notifyController('Error. Reload, please', 'error');
                    submitBtn.removeAttr('disabled');
                    if (typeof(reload_captcha) === "function") {
                        reload_captcha('captcha');
                    }
                }
 
 
            });
 
        }
 
 
    },
    authCtrl: function(res) {
        app.notifyController(res.text, res.status);
        //alert(res.location);
        if (typeof res.location == "undefined") {
            var res_location = 'false';
        } else {
            var res_location = res.location;
        }
 
        if (res_location != 'false') {
            setTimeout(function() {
                window.location = res.location;
            }, 2000);
        } else
        if (res.reload === 'true') {
            if (!(res.run === 'true')) {
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            }
        }
 
 
    },
 
    callback: function(res) {
 
 
        eval(res);
 
 
    },
    timer: function() {
        setInterval(function() {
            $('.timer').each(function() {
                var time = $(this).text().split(':');
                var timestamp = time[0] * 3600 + time[1] * 60 + time[2] * 1;
                timestamp -= timestamp > 0;
                var days = Math.floor(timestamp / 86400);
                var hours = Math.floor(timestamp / 3600);
                var minutes = Math.floor((timestamp - hours * 3600) / 60);
                var seconds = timestamp - hours * 3600 - minutes * 60;
                if (hours < 10) {
                    hours = '0' + hours;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                if (timestamp > 0) {
                    $(this).text(hours + ':' + minutes + ':' + seconds);
                } else {
                    $(this).parent('span').html('<i class="fa fa-check"></i> Р’С‹РїР»Р°С‡РµРЅРѕ');
                }
            });
        }, 1000);
    },
    _content: {
        load: function($page, $lng = 'en') {
            var LastOperationId = $('#_content_' + $page).attr('last-id');
            $('#_content_' + $page).attr('disabled', 'disable');
            $.ajax({
                url: "/" + $lng + "/ajax",
                type: "POST",
                data: {
                    loadajax: '1',
                    page: $page,
                    last_id: LastOperationId
                },
                success: function(data) {
                    var res = $.parseJSON(data);
                    if (res.status === 'success') {
                        $('#_contentblock_' + $page).before(res.html);
                        $('#_content_' + $page).attr('last-id', res.last_id);
                        app.notifyController(res.text, 'success');
                    } else if (res.status === 'info') {
                        app.notifyController(res.text, 'info');
                    }
                    $('#_content_' + $page).removeAttr('disabled');
                },
                error: function() {
                    app.notifyController('Internal error', 'error');
                }
            });
        },
        renew: function($page, $p = 0, $lng = 'en', $sort = '') {
            $.ajax({
                url: "/" + $lng + "/ajax",
                type: "POST",
                data: {
                    loadajax: '1',
                    p: $p,
                    page: $page,
                    sort: $sort
                },
                success: function(data) {
                    var res = $.parseJSON(data);
                    if (res.status === 'success') {
                        $('#_contentblock_' + $page).html(res.html);
                        //app.notifyController(res.text,'success');
                    } else if (res.status === 'info') {
                        //app.notifyController(res.text,'info');
                        location.reload();
                    }
                    $('#_content_' + $page).removeAttr('disabled');
                },
                error: function() {
                    app.notifyController('Internal error', 'error');
                }
            });
        },
 
 
 
    }
}
 
 
 
 
if (typeof _notify_plugin == "undefined") {
    var _notify_plugin = "iziToast";
}
 
app.init(_notify_plugin);
 
 
 
 
 
 
 
 
 
 
 
 
 
if (typeof _error == "undefined") {
    var _error = "";
}
if (typeof _success == "undefined") {
    var _success = "";
}
 
 
if (_error != "") {
    app.notifyController(_error, 'error');
}
if (_success != "") {
    app.notifyController(_success, 'success');
}
 
 
function copyit(varch, alt = false) {
    window.getSelection().removeAllRanges();
    var refcode = document.querySelector('#' + varch);
    var range = document.createRange();
    range.selectNode(refcode);
    window.getSelection().addRange(range);
 
    try {
        var successful = document.execCommand('copy');
        if (alt != false) {
            app.notifyController(alt, "success");
        }
 
    } catch (err) {}
 
    window.getSelection().removeAllRanges();
 
}
