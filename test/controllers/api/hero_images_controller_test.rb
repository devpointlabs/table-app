require 'test_helper'

class Api::HeroImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_hero_images_index_url
    assert_response :success
  end

  test "should get create" do
    get api_hero_images_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_hero_images_destroy_url
    assert_response :success
  end

end
