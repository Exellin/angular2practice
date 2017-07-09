require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  test 'visiting root route' do
    visit '/'
    assert_text('Media Watch List')
  end
end