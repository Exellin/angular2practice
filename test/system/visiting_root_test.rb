require "application_system_test_case"

class RootSpec < ApplicationSystemTestCase
  test 'visiting root route' do
    visit '/'
    assert_text('Media Watch List')
  end
end