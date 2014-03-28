require 'spec_helper'

describe "IndexController (this is a skeleton controller test!)" do


  describe 'get all bands' do
    before :each do

    end
    it 'should see all bands' do
      get "/bands"
      expect(last_response.body).to include(band.name)
    end
  end

  describe 'create a new band' do

    band_name = 'chromatics'
    new_params = {
        name: band_name
      }

    it 'should add a new band' do
      expect{
        post('/bands', new_params)
      }.to change(Band, :count).by(1)
    end
  end
end
