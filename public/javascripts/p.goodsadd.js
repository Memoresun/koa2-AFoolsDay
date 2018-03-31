(function ($) {

    // 初始化
    $(document).ready(function () {
        $("#submit").on('click', function () {
            $.ajax({
                url: "/goods/create",
                data: $('#form').serialize(),
                type: "POST",
                cache: false,
                dataType: 'json',
                success: function (msg) {
                    console.log(msg);
                },
            })
        })

    })

})(jQuery)