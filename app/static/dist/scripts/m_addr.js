require(["jquery","jquery-cityselect"],function(t){function i(i){if(i&&t(".address").find("tbody").find(".addr-row").length>=5)return!1;var n=t("form"),a=!1;n.find("#province").val(n.find(".prov").val()),n.find("#city_input").val(n.find(".city").val()),n.find("#dist").val(n.find(".dist").val());var e=n.find("#name").val(),d=n.find("#detail").val(),l=n.find("#tel").val(),s=n.find("#province").val(),o=n.find("#city_input").val();n.find("#dist").val();return t.trim(e).length>0&&t.trim(d).length>0&&t.trim(l).length>0?t.trim(s).length>0&&t.trim(o).length>0?a=!0:0==t.trim(s).length?n.find(".prov").focus():0==t.trim(o).length&&n.find(".city").focus():0==t.trim(e).length?n.find("#name").focus():0==t.trim(d).length?n.find("#detail").focus():0==t.trim(l).length&&n.find("#tel").focus(),a}var n={bind:function(){t(".bottom-option").on("click",".bottom-btn",function(){function i(t,i){t.removeClass("weui_actionsheet_toggle"),i.removeClass("weui_fade_toggle"),i.on("transitionend",function(){i.hide()}).on("webkitTransitionEnd",function(){i.hide()})}var n=t("#mask"),a=t("#weui_actionsheet");a.addClass("weui_actionsheet_toggle"),n.show().focus().addClass("weui_fade_toggle").one("click",function(){i(a,n)}),t("#actionsheet_cancel").one("click",function(){i(a,n)}),n.unbind("transitionend").unbind("webkitTransitionEnd")})}};n.bind(),t(".go-back").on("click",function(){history.back()}),t("#city").citySelect({url:"/static/dist/scripts/city.min.js",required:!1,nodata:"none"});var a=t(".list").data("uid"),e="/api/v1.0/address";t("#submitbtn").on("click",function(){var n=t(this),a=!0;return n.closest("form").attr("action").indexOf("?edit=true")!=-1&&(a=!1),!!i(a)&&void t("#actionsheet_cancel").click()}),t(".options").find("a").on("click",function(){console.log("click");var i,n=t(this),d={},l=n.closest(".item").data("id");if(console.log(a,l),n.hasClass("delete-addr")||n.hasClass("default-addr"))n.hasClass("delete-addr")?i="DELETE":n.hasClass("default-addr")&&(i="PUT"),"NaN"!=Number(l).toString()&&Number(l)>0&&"NaN"!=Number(a).toString()&&Number(a)>0&&(d.addr_id=l,d.uid=a,t.ajax({url:e,type:i,data:d,success:function(a,e){"success"==e&&"ok"==a.message&&("DELETE"==i?n.closest(".item").fadeOut():(t(".list").find(".text-left").find("a").text("设为默认"),t(".list").find(".text-left").find("a").addClass("default-addr"),t(".list").find(".text-left").find("a").addClass("link-color"),n.removeClass("default-addr"),n.removeClass("link-color"),n.text("默认")))}}));else if(n.hasClass("edit-addr")){console.log("kkkkkk");var s=t("form"),o=n.closest(".item");s.attr("action",e+"?edit=true&addr_id="+l),s.find("#name").val(o.data("name")),s.find("#detail").val(o.data("detail")),s.find("#tel").val(o.data("tel")),s.find("#province").val(o.data("prov")),s.find("#city_input").val(o.data("city")),s.find("#dist").val(o.data("dist")),t("#city").citySelect({url:"/static/dist/scripts/city.min.js",prov:o.data("prov"),city:o.data("city"),dist:o.data("dist"),required:!1,nodata:"none"}),t(".bottom-btn").click()}})});