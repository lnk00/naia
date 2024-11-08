defmodule Naia.Blog do
  alias Naia.Repo
  alias Naia.Blog.Post

  def get_all_posts do
    Post |> Repo.all()
  end
end
