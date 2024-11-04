defmodule Naia.Repo do
  use Ecto.Repo,
    otp_app: :naia,
    adapter: Ecto.Adapters.Postgres
end
