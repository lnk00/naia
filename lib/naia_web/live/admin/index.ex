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

  def handle_event("delete_post", %{"value" => post_id}, socket) do
    case Blog.delete_post(post_id) do
      {1, nil} ->
        updated_posts = Enum.reject(socket.assigns.posts, &(&1.id == String.to_integer(post_id)))
        {:noreply, assign(socket, posts: updated_posts)}

      {0, nil} ->
        {:noreply, socket}
    end
  end
end
