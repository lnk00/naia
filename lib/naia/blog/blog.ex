defmodule Naia.Blog do
  require Ecto.Query
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
  @spec insert_post(title :: String.t(), content :: String.t(), author :: String.t()) ::
          {:ok, Post} | {:error, Post.changeset()}
  def insert_post(title, content, author) do
    post = %Post{
      title: title,
      content: content,
      author:
        author
        |> String.split("_")
        |> Enum.map(&String.capitalize/1)
        |> Enum.join(" ")
    }

    Repo.insert(post)
  end

  @doc """
  Delete a blog post in db
  """
  @spec delete_post(post_id :: String.t()) :: {non_neg_integer(), nil | term()}
  def delete_post(post_id) do
    Ecto.Query.from(p in Post, where: p.id == ^post_id) |> Repo.delete_all()
  end
end
