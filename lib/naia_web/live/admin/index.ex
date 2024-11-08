defmodule NaiaWeb.Admin.Index do
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def mount(_params, _session, socket) do
    posts = Blog.get_all_posts()
    {:ok, assign(socket, posts: posts)}
  end
end
