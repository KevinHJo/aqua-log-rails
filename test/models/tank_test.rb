# == Schema Information
#
# Table name: tanks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
# Indexes
#
#  index_tanks_on_owner_id           (owner_id)
#  index_tanks_on_owner_id_and_name  (owner_id,name) UNIQUE
#
require 'test_helper'

class TankTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
