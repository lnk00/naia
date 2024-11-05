defmodule NaiaWeb.Component.Navbar do
  @moduledoc false
  use NaiaWeb.Component

  def(navbar(assigns)) do
    ~H"""
    <header class="h-12 mt-8">
      <nav class="mx-auto flex items-center justify-between" aria-label="Global">
        <div class="flex gap-x-12">
          <a href="#" class="text-lg font-semibold text-pink-500">Overview</a>
          <a href="#" class="text-lg font-semibold text-gray-900">Blog</a>
          <a href="#" class="text-lg font-semibold text-gray-900">Contact us</a>
        </div>
      </nav>
    </header>
    """
  end
end
