defmodule NaiaWeb.Admin.Upload do
  alias Naia.Blog
  use NaiaWeb, :live_view_admin

  def mount(_, _, socket) do
    form = to_form(%{"title" => "", "author" => ""})
    {:ok, assign(socket |> allow_upload(:file, accept: ~w(.md), max_entries: 1), form: form)}
  end

  def handle_event("validate", _params, socket) do
    {:noreply, socket}
  end

  def handle_event("upload_post", %{"title" => title, "author" => author}, socket) do
    file_content = read_file(socket) |> Earmark.as_html!()
    Blog.insert_post(title, file_content, author)

    {:noreply, push_navigate(socket, to: "/admin")}
  end

  def read_file(socket) do
    consume_uploaded_entries(socket, :file, fn %{path: path}, _entry ->
      case File.read(path) do
        {:ok, content} -> {:ok, content}
      end
    end)
    |> List.first()
  end
end
