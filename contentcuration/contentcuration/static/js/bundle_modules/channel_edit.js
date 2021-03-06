var Views = require("edit_channel/new_channel/views");
var Models = require("edit_channel/models");
var Backbone = require("backbone");
var ChannelEditRouter = require("edit_channel/router");

$(function() {
	$("#channel-publish-button").on("click", publish_nodes);
});

function publish_nodes(){
	if(confirm("Are you sure you would like to publish?")){
		$("#main-content-area").find(".to_publish").each(function(){
			console.log("Publishing...");
			$("#" + this.id).data("data").publish();
		});
		alert("Published!");
	}
}



module.exports = {
	$: $,
	ChannelEditRouter: ChannelEditRouter,
	Backbone: Backbone
};