defmodule NaiaWeb.Blog.Index do
  use NaiaWeb, :live_view

  def handle_event("go_to_landing", _, socket) do
    {:noreply, push_navigate(socket, to: "/")}
  end
end
