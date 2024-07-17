/**
 * Created by alone on 2017/5/14.
 */
$(function () {
    insertShopCar();
    var type_list = getTypeList();
    $(window).scroll(function () {
        var temp = $(this).scrollTop();
        if (temp > 100) {
            $('.my_type_div').css({"margin-top": "8%"});
            $('.particular_type_div').css({"margin-top": "8%"});
        } else {
            $('.my_type_div').css({"margin-top": "15%"});
            $('.particular_type_div').css({"margin-top": "15%"});
        }
    });
    $('.my_type_div ul li').hover(function () {
        var temp_class = $(this).attr("class");
        if (temp_class == 'type_1') {
            addList(0);
        } else if (temp_class == 'type_2') {
            addList(1);
        } else if (temp_class == 'type_3') {
            addList(2);
        } else if (temp_class == 'type_4') {
            addList(3);
        } else if (temp_class == 'type_5') {
            addList(4);
        } else if (temp_class == 'type_6') {
            addList(5);
        }
        function addList(id) {
            var which = type_list[id];
            var my_string = "";
            for (j = 0; j < which.length; j++) {
                var type_i = which[j];
                var arr = type_i.content;
                var a_list = "";
                for (i = 0; i < arr.length; i++) {
                    a_list += "<a id = '" + arr[i].id + "' class='shop_sort'>" + arr[i].name + "</a>";
                }
                my_string += "<div class='one_part'><div class='type_title_div'>" +
                    "<span class='type_border_span'>1</span><h3>" + type_i.name + "</h3></div><div " +
                    "class='type_goods_list'>" + a_list + "</div></div>";
            }
            $('.particular_type_div').html(my_string);
            //  点击事件
            $('.type_goods_list a.shop_sort').click(function () {
                var sort = $(this).attr('id');
                window.location.href='/mall_page.do?sort='+sort;
            })
        }

        $('.particular_type_div').show(0);
    });
    $('header').click(function () {
        hideParticular();
    });

    //  上一页
    $('.pagination_lt').click(function () {
        var count=$('#count').text();
        var sort=$('#sort').val();
        if(count!=='1'){
            window.location.href='/mall_page.do?count='+(parseInt(count)-1)+'&sort='+(parseInt(sort));
        }
    });
    //下一页
    $('.pagination_gt').click(function () {
        var count=$('#count').text();
        var page=$('#page').text();
        var sort=$('#sort').val();
        if(count!==page){
            window.location.href='/mall_page.do?count='+(parseInt(count)+1)+'&sort='+(parseInt(sort));
        }
    });
    function selectByCounts(currentCounts) {
        window.location.href='/mall_page.do?count='+currentCounts;
    }
    //进入查看商品的详情,通过id
    $('.detail_product_name').click(function () {
        var id = $(this).attr('value');
        window.location.href='/selectById.do?id='+id;
    });
    function insertShopCar() {
        $('.detail_buy').click(function () {
            var id = $(this).attr('value');
            $.ajax({
                url:'/insertGoodsCar.do',
                dataType:'JSON',
                type:'post',
                data:{sid:id},
                success:function (data) {
                    var result = data.result;
                    if (result == '2'){
                        var r=confirm("您还未登录，请先登录!!!");
                        if (r==true){
                            window.location.href='/login.do';
                        }
                    } else if (result == '1'){
                        alert('收藏成功');
                    } else if (result == '0'){
                        alert('已收藏');
                    } else {
                        alert('发生了错误，请检测网络');
                    }
                }
            })
        });
    }

});
function hideParticular() {
    if ($('.particular_type_div').is(":visible")) {
        $('.particular_type_div').hide(0);
    }
}