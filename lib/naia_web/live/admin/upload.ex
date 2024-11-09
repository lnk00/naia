defmodule NaiaWeb.Admin.Upload do
  alias Naia.Blog.Post
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def mount(_, _, socket) do
    form = to_form(%{"title" => "", "author" => ""})
    {:ok, assign(socket, form: form)}
  end

  def handle_event("upload_post", %{"title" => title, "author" => author}, socket) do
    Blog.insert_post(%Post{
      title: title,
      content: "content generated",
      author:
        author
        |> String.split("_")
        |> Enum.map(&String.capitalize/1)
        |> Enum.join(" ")
    })

    {:noreply, push_navigate(socket, to: "/admin")}
  end
end
