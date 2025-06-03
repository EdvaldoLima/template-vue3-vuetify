import { createServer } from "miragejs"

// DB
import { settings } from "./db/settings"

const mockApi = () => {
  return createServer({
    routes() {
      this.urlPrefix = 'http://localhost:3000';
      this.namespace = "/v1"
      this.timing = 2000

      this.get("/settings", () => settings)

      console.warn("Fake Server On: ", `timing response: ${this.timing}ms`);
    },
  })
}

export default mockApi