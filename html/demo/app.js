define(['react', 'react-dom', '../../html/demo/pages/DateTime', '../../html/demo/pages/Button', '../../html/demo/pages/Grids', '../../html/demo/pages/FontIcon/FontIcon', '../../html/demo/pages/FontIcon/AllIcons', '../../html/demo/pages/Table', '../../html/demo/pages/Pagination', '../../html/demo/pages/Accordion', '../../html/demo/pages/SideBar', '../../html/demo/pages/Tree/Tree', '../../html/demo/pages/Tree/ComboTree', '../../html/demo/pages/Tree/TreeCheckBox', '../../html/demo/pages/Tree/TreeFunctions', '../../html/demo/pages/Tree/TreeRemote', '../../html/demo/pages/Form/Input', '../../html/demo/pages/Form/TextArea', '../../html/demo/pages/Form/CheckBox', '../../html/demo/pages/Form/RadioGroup', '../../html/demo/pages/Form/Upload', '../../html/demo/pages/Form/Form', '../../html/demo/pages/Form/FormControl', '../../html/demo/pages/Select', '../../html/demo/pages/Progress', '../../html/demo/pages/DateRange', '../../html/demo/pages/Tab', '../../html/demo/pages/Toast', '../../html/demo/pages/Panel/Panel', '../../html/demo/pages/Panel/MessageBox', '../../html/demo/pages/Panel/Dialog', 'ReactRouter', "SideBar"], function (React, ReactDOM, DateTime, Button, Grids, FontIcon, AllIcons, Table, Pagination, PageAccordion, PageSideBar, Tree, ComboTree, TreeCheckBox, TreeFunctions, TreeRemote, Input, TextArea, CheckBox, RadioGroup, Upload, Form, FormControl, Select, Progress, DateRange, Tab, Toast, Panel, MessageBox, Dialog, ReactRouter, SideBar) {
    'use strict';

    var Component = React.Component;

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var Link = ReactRouter.Link;
    var IndexLink = ReactRouter.Link;

    var APP = {
        sysName: "CMUI",
        menus: [{ id: "1", text: "Button", icon: "fa fa-square", link: "Button", component: Button }, { id: "2", text: "DateTime", icon: "fa fa-calendar", link: "DateTime", component: DateTime }, { id: "3", text: "Grids", icon: "fa fa-th", link: "Grids", component: Grids }, { id: "4", text: "FontIcon", icon: "fa fa-flag", children: [{ id: "41", text: "FontIcon", link: "FontIcon", component: FontIcon }, { id: "42", text: "AllIcons", link: "AllIcons", component: AllIcons }] }, { id: "5", text: "Table", icon: "fa fa-table", link: "Table", component: Table }, { id: "6", text: "Pagination", icon: "fa fa-ellipsis-h", link: "Pagination", component: Pagination }, { id: "7", text: "Accordion", icon: "fa fa-list", link: "PageAccordion", component: PageAccordion }, { id: "8", text: "Tree", icon: "tree", children: [{ id: "81", text: "Tree", link: "Tree", component: Tree }, { id: "82", text: "TreeCheckBox", link: "TreeCheckBox", component: TreeCheckBox }, { id: "83", text: "TreeFunctions", link: "TreeFunctions", component: TreeFunctions }, { id: "84", text: "TreeRemote", link: "TreeRemote", component: TreeRemote }, { id: "85", text: "ComboTree", link: "ComboTree", component: ComboTree }] }, { id: "9", text: "Form", icon: "square-o", children: [{ id: "91", text: "Input", link: "Input", component: Input }, { id: "92", text: "CheckBox", link: "CheckBox", component: CheckBox }, { id: "93", text: "RadioGroup", link: "RadioGroup", component: RadioGroup }, { id: "94", text: "Upload", link: "Upload", component: Upload }, { id: "95", text: "FormControl", link: "FormControl", component: FormControl }, { id: "96", text: "Form", link: "Form", component: Form }, { id: "97", text: "TextArea", link: "TextArea", component: TextArea }] }, { id: "10", text: "Select", icon: "fa fa-list", link: "Select", component: Select }, { id: "11", text: "Progress", icon: "fa fa-minus", link: "Progress", component: Progress }, { id: "12", text: "DateRange", icon: "fa fa-clock-o", link: "DateRange", component: DateRange }, { id: "13", text: "Tab", icon: "fa fa-folder", link: "Tab", component: Tab }, { id: "14", text: "Toast", icon: "fa fa-cog", link: "Toast", component: Toast }, { id: "15", text: "Panel", icon: "fa fa-folder", children: [{ id: "151", text: "Panel", icon: "fa fa-folder", link: "Panel", component: Panel }, { id: "152", text: "MessageBox", icon: "fa fa-folder", link: "MessageBox", component: MessageBox }, { id: "153", text: "Dialog", icon: "fa fa-folder", link: "Dialog", component: Dialog }] }]
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
        if (item.children) {
            item.children.forEach(function (subItem, subIndex) {
                routers.push(React.createElement(Route, { key: subIndex, path: subItem.link, component: subItem.component }));
            });
        }
        routers.push(React.createElement(Route, { key: index, path: item.link, component: item.component }));
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
