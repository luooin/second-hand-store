/**
 * Created by alone on 2017/5/18.
 */
$(function () {
//            按照下面这个方式添加新的元素，如果想在开头位置添加，就用first  before
//            $('.table_content:last').after("<tr class='table_content'><td><span>11111</span></td></tr>");
    $('input[name="selectall"]').click(function(){
        if($(this).is(':checked')){
            $('input[name="checkbox"]').each(function(){
                $(this).prop("checked",true);
            });
        }else{
            $('input[name="checkbox"]').each(function(){
                $(this).prop("checked",false);
            });
        }
    });

    $(":checkbox[name='checkbox']").click(function () {
        var allCount = $(":checkbox[name='checkbox']").length;
        var checkedCount = $(":checkbox[name='checkbox']:checked").length;
        $("#all").prop("checked", allCount == checkedCount);
    });

    $('.deleteShopCar').click(function () {
        var r = confirm('确定删除？？？？');
        if (r == true) {
            var sid = $(this).parent().siblings(".show_img").children().attr("value");
            // alert(sid);
            $.ajax({
                url:'deleteShopCar.do',
                dataType:'JSON',
                type:'post',
                data:{sid:sid},
                success:function (data) {
                    var result = data.result;
                    if (result==2){
                        alert('您还没有登录，请先登录');
                    }  else if (result==1) {
                        alert("删除成功");
                        window.location.href='shopping_cart.do?result=删除成功';
                    } else if (result==0){
                        alert('删除失败，请检测网络');
                    } else {
                        alert('删除失败，请检测网络');
                    }
                }
            })
        }
    })

    $('.delete_button').click(function () {
        var r = confirm('确定批量删除所选商品？？？？');
        if (r == true) {
            var sids = new Array();
            $("input[name='checkbox']:checked").each(function() {
                sids.push($(this).val());
            });
            $.ajax({
                url:'deleteShopCarBySids.do',
                dataType:'JSON',
                type:'post',
                data:{sids:sids},
                success:function (data) {
                    var result = data.result;
                    if (result==2){
                        alert('您还没有登录，请先登录');
                    }  else if (result==1) {
                        alert("批量删除成功");
                        window.location.href='shopping_cart.do?result=删除成功';
                    } else if (result==0){
                        alert('批量删除失败，请检测网络');
                    } else {
                        alert('批量删除失败，请检测网络');
                    }
                }
            })
        }
    })

    $('.product_name').click(function () {
        var id = $(this).attr('value');
        window.location.href='/selectById.do?id='+id;
    });
});