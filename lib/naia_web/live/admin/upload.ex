defmodule NaiaWeb.Admin.Upload do
  alias Naia.Blog.Post
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def handle_event("upload_post", _, socket) do
    Blog.insert_post(%Post{
      title: "title generated",
      content: "content generated",
      author: "Jannai Kalla"
    })

    {:noreply, push_navigate(socket, to: "/admin")}
  end
end
