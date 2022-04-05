export default [
  {
    name: "登录",
    path: "/user/login",
    layout: false,
    hideInMenu: true,
    component: "./user/login"
  },
  {
    name: "系统设置",
    path: "/settings",
    component: "./settings/layout",
    routes: [
      {
        name: "角色管理",
        menuRender: false,
        path: "/settings/roles",
        component: "./settings/roles"
      }
    ]
  },
  {
    name: "",
    layout: false,
    path: "/design/edit",
    component: "./design/edit"
  },
  {
    component: "./404"
  }
];
