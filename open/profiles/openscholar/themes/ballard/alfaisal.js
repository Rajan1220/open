jQuery(document).ready(function() {
 // Move vsite site-info and site-logo block to content region 
 jQuery( ".page-biocv .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-biocv #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );
 
 jQuery( ".page-calendar .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-calendar #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );

 jQuery( ".page-classes .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-classes #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );

 jQuery( ".page-news .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-news #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );

 jQuery( ".page-presentations  .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-presentations  #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );

 jQuery( ".page-publications .region-header-second" ).insertBefore( "#main-content-header" );
 jQuery(".page-publications #boxes-box-site_logo").insertAfter( ".region-header-second .region-inner #block-boxes-site-info" );


 // Most visited faculty profile should display only on the home page
 if (document.URL != "http://192.168.1.4/openscholar7/") {
  jQuery('#block-views-21beb2ef99faf9385ef64baef34863bd').hide();
 }

 // Change labels in vsite user contact widget
 jQuery("#view-site-title").text("what you want to put");

 // Hide import publication button
 var divToolbar  = document.getElementById("toolbar-user");
 var links = divToolbar.getElementsByTagName("li");
 jQuery(links).each(function() {
   var link =  jQuery(this).text();
   if (link != 'Log out') {
     var username = jQuery(this).text();
     var url   = document.URL;
     var n = url.indexOf(username);
     if (username != 'admin') {
       if (n<0) {
         jQuery(".contextual-controls-wrapper").children(":first").hide();
       }
     }
   }
 });
});
