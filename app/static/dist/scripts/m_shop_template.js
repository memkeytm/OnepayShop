!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.period_join_item_tpl=n({1:function(n,a,t,l,s){var e,i=n.lambda,r=n.escapeExpression;return'<tr class="m-join-item">\n\t<td class="col-img"><a><img src="'+r(i(null!=(e=null!=a?a.owner:a)?e.avatar:e,a))+'"></a></td>\n\t<td class="join-detail">\n\t\t<a class="link-color">'+r(i(null!=(e=null!=a?a.owner:a)?e.name:e,a))+'</a>\n\t\t<a class="view-num link-color" href="javascript:void(0);" data-num="'+r(i(null!=a?a.num:a,a))+'">查看号码</a>\n\t\t<div class="user-id">\n\t\t\t<span><span class="describe-info">用户ID: </span>'+r(i(null!=(e=null!=a?a.owner:a)?e.id:e,a))+'(唯一不变的标识)</span>\n\t\t</div>\n\t\t<div class="join-info clearfix">\n\t\t\t<span>参与了<strong>'+r(i(null!=a?a.count:a,a))+'</strong>人次</span>\n\t\t\t<span class="describe-info pull-right">'+r(i(null!=a?a.created_datetime:a,a))+"</span>\n\t\t</div>\n\t</td>\n</tr>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,t,l,s){var e;return null!=(e=t.each.call(null!=a?a:{},null!=a?a.data:a,{name:"each",hash:{},fn:n.program(1,s,0),inverse:n.noop,data:s}))?e:""},useData:!0})}();