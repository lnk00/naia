defmodule Naia.Repo.Migrations.CreateBlogPosts do
  use Ecto.Migration

  def change do
    create table(:blog_posts) do
      add :title, :string
      add :author, :string
      add :content, :text

      timestamps(type: :utc_datetime)
    end
  end
end
