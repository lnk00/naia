defmodule NaiaWeb.Plugs do
  def basic_authentication(conn, _opts) do
    env = Dotenv.load()
    username = env.values["BASIC_USERNAME"]
    password = env.values["BASIC_PASSWORD"]
    Plug.BasicAuth.basic_auth(conn, username: username, password: password)
  end
end
