defmodule NaiaWeb.Admin.Upload do
  alias Naia.Blog.Post
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def mount(_, _, socket) do
    form = to_form(%{"title" => ""})
    {:ok, assign(socket, form: form)}
  end

  def handle_event("upload_post", %{"title" => title}, socket) do
    Blog.insert_post(%Post{
      title: title,
      content: "content generated",
      author: "Jannai Kalla"
    })

    {:noreply, push_navigate(socket, to: "/admin")}
  end
end
