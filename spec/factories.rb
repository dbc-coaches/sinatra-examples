require 'factory_girl'


FactoryGirl.define do
  factory :band do
    name { Faker.name }

    factory :band_with_members
  end
end