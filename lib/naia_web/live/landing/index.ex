defmodule NaiaWeb.Landing.Index do
  use NaiaWeb, :live_view

  def handle_event("go_to_blog", _, socket) do
    {:noreply, push_navigate(socket, to: "/blog")}
  end
end
