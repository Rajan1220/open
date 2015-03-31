jQuery(document).ready(function() {
  // Change labels in vsite user contact widget
  // jQuery("#view-site-title").text("what you want to put");

  // Hide un-necessary groups on user creation
  jQuery("#edit-field-group-reference-und-0-default option[value='152']").remove();
  jQuery("#edit-field-group-reference-und-0-default option[value='87']").remove();
  jQuery("#edit-field-group-reference-und-0-default option[value='9']").remove();

  // Hide your membership block displayed upon user edit
  jQuery('#edit-field-group-membership-und .fieldset-legend').hide();
  jQuery('.form-item.form-type-select.form-item-field-group-membership-und-0-default').hide();

});
