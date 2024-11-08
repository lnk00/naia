defmodule Naia.Blog do
  alias Naia.Repo
  alias Naia.Blog.Post

  @doc """
  Return a lis of all blog posts published by all authors
  """
  @spec get_all_posts() :: list(Post)
  def get_all_posts do
    Post |> Repo.all()
  end

  @doc """
  Insert a blog post in db
  """
  @spec insert_post(post :: Post) :: {:ok, Post} | {:error, Post.changeset()}
  def insert_post(post) do
    Repo.insert(post)
  end
end
