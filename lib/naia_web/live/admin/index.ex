defmodule NaiaWeb.Admin.Index do
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def mount(_params, _session, socket) do
    send(self(), :mounted)
    {:ok, assign(socket, posts: nil, loading: true)}
  end

  def handle_info(:mounted, socket) do
    posts = Blog.get_all_posts()
    {:noreply, assign(socket, posts: posts, loading: false)}
  end

  def handle_event("go_to_upload", _, socket) do
    {:noreply, push_navigate(socket, to: "/admin/upload")}
  end
end
