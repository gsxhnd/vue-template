import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Home = { template: "<div>Home</div>" };
const Login = { template: "<div>Login</div>" };

const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  component: Home,
  meta: {
    title: "Root",
  },
};

const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: Login,
  meta: {
    title: "",
  },
};

// export const constantRouter: any[] = [LoginRoute, RootRoute];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [RootRoute, LoginRoute],
  // strict: true,
});

export { router };
