Feature: Testing OpenScholar layout.

  @javascript @wip
  Scenario: Test the drag&drop for the layout.
    Given I am logged in as "admin"
     When I visit "/john/cp/build/layout/os_front?destination=home"
      And I drag&drop "boxes-site_logo" to "edit-layout-content-top"
      And I press "edit-submit"
     Then I verify the element "boxes-box-site_logo" under "columns"
