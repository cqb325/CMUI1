define(['react', 'react-dom', 'ReactRouter', "SideBar"], function (React, ReactDOM, ReactRouter, SideBar) {
    'use strict';

    var Component = React.Component;

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var Link = ReactRouter.Link;
    var IndexLink = ReactRouter.Link;

    var APP = {
        sysName: "CMUI",
        menus: [{ id: "1", text: "Button", icon: "fa fa-square", link: "Button" }, { id: "2", text: "DateTime", icon: "fa fa-calendar", link: "DateTime" }, { id: "3", text: "Grids", icon: "fa fa-th", link: "Grids" }, { id: "4", text: "FontIcon", icon: "fa fa-flag", children: [{ id: "41", text: "FontIcon", link: "FontIcon/FontIcon" }, { id: "42", text: "AllIcons", link: "FontIcon/AllIcons" }] }, { id: "5", text: "Table", icon: "fa fa-table", link: "Table" }, { id: "6", text: "Pagination", icon: "fa fa-ellipsis-h", link: "Pagination" }, { id: "7", text: "Accordion", icon: "fa fa-list", link: "Accordion" }, { id: "8", text: "Tree", icon: "tree", children: [{ id: "81", text: "Tree", link: "Tree/Tree" }, { id: "82", text: "TreeCheckBox", link: "Tree/TreeCheckBox" }, { id: "83", text: "TreeFunctions", link: "Tree/TreeFunctions" }, { id: "84", text: "TreeRemote", link: "Tree/TreeRemote" }, { id: "85", text: "ComboTree", link: "Tree/ComboTree" }] }, { id: "9", text: "Form", icon: "square-o", children: [{ id: "91", text: "Input", link: "Form/Input" }, { id: "92", text: "CheckBox", link: "Form/CheckBox" }, { id: "93", text: "RadioGroup", link: "Form/RadioGroup" }, { id: "94", text: "Upload", link: "Form/Upload" }, { id: "95", text: "FormControl", link: "Form/FormControl" }, { id: "96", text: "Form", link: "Form/Form" }, { id: "97", text: "TextArea", link: "Form/TextArea" }] }, { id: "10", text: "Select", icon: "fa fa-list", link: "Select" }, { id: "11", text: "Progress", icon: "fa fa-minus", link: "Progress" }, { id: "12", text: "DateRange", icon: "fa fa-clock-o", link: "DateRange" }, { id: "13", text: "Tab", icon: "fa fa-folder", link: "Tab" }, { id: "14", text: "Toast", icon: "fa fa-cog", link: "Toast" }, { id: "15", text: "Panel", icon: "fa fa-folder", children: [{ id: "151", text: "Panel", icon: "fa fa-folder", link: "Panel/Panel" }, { id: "152", text: "MessageBox", icon: "fa fa-folder", link: "Panel/MessageBox" }, { id: "153", text: "Dialog", icon: "fa fa-folder", link: "Panel/Dialog" }] }, { id: "16", text: "Divider", icon: "fa fa-cog", link: "Divider" }, { id: "17", text: "AutoComplete", icon: "fa fa-cog", link: "AutoComplete" }, { id: "18", text: "Tooltip", icon: "fa fa-cog", link: "Tooltip/Tooltip" }]
    };

    var App = React.createClass({
        displayName: 'App',
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    SideBar,
                    { data: APP.menus, style: { width: '200px' }, logo: './assets/imgs/logo.png', header: APP.sysName },
                    this.props.children
                )
            );
        }
    });

    var routers = [];
    APP.menus.map(function (item, index) {
        var _ctx = "../../html/demo/pages";
        if (item.children) {
            item.children.forEach(function (subItem, subIndex) {
                if (subItem.link) {
                    routers.push(React.createElement(Route, { key: subIndex, path: subItem.link, getComponents: function getComponents(nextState, callback) {
                            var module_url = _ctx + "/" + subItem.link;
                            require.ensure([module_url], function (Widget) {
                                callback(null, Widget);
                            });
                        } }));
                }
                routers.push(React.createElement(Route, { key: subIndex, path: subItem.link, component: subItem.component }));
            });
        }
        if (item.link) {
            routers.push(React.createElement(Route, { path: item.link, key: 'index', getComponents: function getComponents(nextState, callback) {
                    var module_url = _ctx + "/" + item.link;
                    require.ensure([module_url], function (Widget) {
                        callback(null, Widget);
                    });
                } }));
        }
    });

    var Dashboard = React.createClass({
        displayName: 'Dashboard',
        render: function render() {
            return React.createElement(
                'div',
                null,
                'Welcome to the app!'
            );
        }
    });

    ReactDOM.render(React.createElement(
        Router,
        null,
        React.createElement(
            Route,
            { path: '/', component: App },
            React.createElement(IndexRoute, { component: Dashboard }),
            routers
        )
    ), document.querySelector("#example"));
});
