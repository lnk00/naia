defmodule NaiaWeb.Component.Navbar do
  @moduledoc false
  use NaiaWeb.Component
  import NaiaWeb.Component.Button

  def(navbar(assigns)) do
    ~H"""
    <header class="h-12 mt-8">
      <nav class="mx-auto flex items-center justify-between" aria-label="Global">
        <div class="flex gap-x-12">
          <.button phx-click="go_to_blog" variant="link" class="text-lg font-semibold text-pink-500">
            Overview
          </.button>
          <.button phx-click="go_to_blog" variant="link" class="text-lg font-semibold">
            Blog
          </.button>
          <.button phx-click="go_to_blog" variant="link" class="text-lg font-semibold">
            Contact us
          </.button>
        </div>
      </nav>
    </header>
    """
  end
end
