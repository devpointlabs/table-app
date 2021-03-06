# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_24_222424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "events", force: :cascade do |t|
    t.string "host", null: false
    t.text "image_url"
    t.datetime "event_date", null: false
    t.string "dress_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.datetime "event_time"
    t.integer "available_tickets"
    t.integer "t1_price"
    t.integer "t2_price"
    t.integer "t3_price"
    t.integer "t4_price"
  end

  create_table "hero_images", force: :cascade do |t|
    t.string "image_url"
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "my_tickets", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_my_tickets_on_event_id"
    t.index ["user_id"], name: "index_my_tickets_on_user_id"
  end

  create_table "r_tickets", force: :cascade do |t|
    t.bigint "cart_id"
    t.integer "quantity"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ticket_type"
    t.integer "price"
    t.index ["cart_id"], name: "index_r_tickets_on_cart_id"
    t.index ["event_id"], name: "index_r_tickets_on_event_id"
  end

  create_table "rsvps", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "date"
    t.string "size"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "settings", force: :cascade do |t|
    t.string "venue_name"
    t.string "logo"
    t.text "contact_us_blurb"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zip_code"
    t.string "telephone"
    t.string "email"
    t.text "about_us"
    t.text "facebook_url"
    t.text "twitter_url"
    t.text "instagram_url"
    t.text "google_maps"
    t.decimal "longitude"
    t.decimal "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "table_groups", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "max_seats", default: 15
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tables", force: :cascade do |t|
    t.string "name"
    t.bigint "table_group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["table_group_id"], name: "index_tables_on_table_group_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "first_name"
    t.string "last_name"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.string "gender"
    t.string "city"
    t.date "date_of_birth"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "carts", "users"
  add_foreign_key "my_tickets", "events"
  add_foreign_key "my_tickets", "users"
  add_foreign_key "r_tickets", "carts"
  add_foreign_key "r_tickets", "events"
  add_foreign_key "tables", "table_groups"
end
