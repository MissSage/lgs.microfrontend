import { registerApplication, start } from "single-spa"

registerApplication(
  "@single-spa/welcome",
  () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
  location => location.pathname === "/"
)

registerApplication({
  name: "@lgs/lagou",
  app: () => System.import("@lgs/lagou"),
  activeWhen: ["/lagou"]
})

registerApplication({
  name: "@lgs/vue",
  app: () => System.import("@lgs/vue"),
  activeWhen: ["/vue"]
})
start({
  urlRerouteOnly: true,
})
