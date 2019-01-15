class ChangeEventTimeToDatetime < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :event_time, 'timestamp USING CAST(event_time AS timestamp)'
  end
end
