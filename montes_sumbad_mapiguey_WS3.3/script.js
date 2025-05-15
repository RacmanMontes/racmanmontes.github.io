 
        $(document).ready(function(){
            $("#tohide").hide();
            $("#empty-cart").show();

            $(".addtocart").click(function(){
                var num = $(this).attr("id");
                
                $("#fruitname").text($("#fruitname"+num).text());
                var price=$("#fruitprice"+num).text();
                var unit=$("#fruitunit"+num).attr("name");

                $("#fruitprice").text("Php "+$("#fruitprice"+num).text()+"/"+unit);
                var image=$("#fruitimage"+num).attr("src");
                $("#fruitimage").attr("src", image).show();
                $("#fruitunit").text(unit+("(s)"));
                $("#price").val(price);
                $("#tohide").show();
                $("#empty-cart").hide();

                var totals = 1 * price;
                $("#quantity").val(1);
                $("#total").text("₱" + totals.toFixed(2));
            });

            $("#quantity").change(function(){
                var quantity = $("#quantity").val();
                var dprice = $("#price").val();
                var total = quantity * dprice;
                $("#total").text("₱" + total.toFixed(2));
            });
        });
    