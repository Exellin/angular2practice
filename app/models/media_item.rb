class MediaItem < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :year, presence: true, inclusion: { in: 1900..2100, message: "must be between 1900 and 2100" }
end