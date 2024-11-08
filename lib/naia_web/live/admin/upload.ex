defmodule NaiaWeb.Admin.Upload do
  use NaiaWeb, :live_view_admin

  def handle_event("go_to_admin", _, socket) do
    {:noreply, push_navigate(socket, to: "/admin")}
  end
end
