
describe Cohort do
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name).scoped_to(:year) }
  it { should have_many(:teachers) }
  it { should have_many(:students) }
  it { should belong_to(:location) }
end

