const React = require('react');
const ReactDOM = require('react-dom');
const Component = React.Component;

const DateTime = require('../../html/demo/pages/DateTime');
const Button = require('../../html/demo/pages/Button');
const Grids = require('../../html/demo/pages/Grids');
const FontIcon = require('../../html/demo/pages/FontIcon/FontIcon');
const AllIcons = require('../../html/demo/pages/FontIcon/AllIcons');
const Table = require('../../html/demo/pages/Table');
const Pagination = require('../../html/demo/pages/Pagination');
const PageAccordion = require('../../html/demo/pages/Accordion');
const PageSideBar = require('../../html/demo/pages/SideBar');
const Tree = require('../../html/demo/pages/Tree/Tree');
const ComboTree = require('../../html/demo/pages/Tree/ComboTree');
const TreeCheckBox = require('../../html/demo/pages/Tree/TreeCheckBox');
const TreeFunctions = require('../../html/demo/pages/Tree/TreeFunctions');
const TreeRemote = require('../../html/demo/pages/Tree/TreeRemote');
const Input = require('../../html/demo/pages/Form/Input');
const TextArea = require('../../html/demo/pages/Form/TextArea');
const CheckBox = require('../../html/demo/pages/Form/CheckBox');
const RadioGroup = require('../../html/demo/pages/Form/RadioGroup');
const Upload = require('../../html/demo/pages/Form/Upload');
const Form = require('../../html/demo/pages/Form/Form');
const FormControl = require('../../html/demo/pages/Form/FormControl');
const Select = require('../../html/demo/pages/Select');
const Progress = require('../../html/demo/pages/Progress');
const DateRange = require('../../html/demo/pages/DateRange');
const Tab = require('../../html/demo/pages/Tab');
const Toast = require('../../html/demo/pages/Toast');
const Panel = require('../../html/demo/pages/Panel/Panel');
const MessageBox = require('../../html/demo/pages/Panel/MessageBox');
const Dialog = require('../../html/demo/pages/Panel/Dialog');
const Divider = require('../../html/demo/pages/Divider');
const AutoComplete = require('../../html/demo/pages/AutoComplete');

const ReactRouter = require('ReactRouter');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;
const IndexLink = ReactRouter.Link;

const APP = {
    sysName: "CMUI",
    menus: [
        {id:"1", text: "Button",icon: "fa fa-square",link: "Button", component: Button},
        {id:"2", text: "DateTime",icon: "fa fa-calendar",link: "DateTime", component: DateTime},
        {id:"3", text: "Grids",icon: "fa fa-th",link: "Grids", component: Grids},
        {id:"4", text: "FontIcon",icon: "fa fa-flag", children: [
            {id:"41", text: "FontIcon",link: "FontIcon", component: FontIcon},
            {id:"42", text: "AllIcons",link: "AllIcons", component: AllIcons}
        ]},
        {id:"5", text: "Table",icon: "fa fa-table",link: "Table", component: Table},
        {id:"6", text: "Pagination",icon: "fa fa-ellipsis-h",link: "Pagination", component: Pagination},
        {id:"7", text: "Accordion",icon: "fa fa-list",link: "PageAccordion", component: PageAccordion},
        {id:"8", text: "Tree",icon: "tree", children: [
            {id:"81", text: "Tree",link: "Tree", component: Tree},
            {id:"82", text: "TreeCheckBox",link: "TreeCheckBox", component: TreeCheckBox},
            {id:"83", text: "TreeFunctions",link: "TreeFunctions", component: TreeFunctions},
            {id:"84", text: "TreeRemote",link: "TreeRemote", component: TreeRemote},
            {id:"85", text: "ComboTree",link: "ComboTree", component: ComboTree}
        ]},
        {id:"9", text: "Form",icon: "square-o", children: [
            {id:"91", text: "Input",link: "Input", component: Input},
            {id:"92", text: "CheckBox",link: "CheckBox", component: CheckBox},
            {id:"93", text: "RadioGroup",link: "RadioGroup", component: RadioGroup},
            {id:"94", text: "Upload",link: "Upload", component: Upload},
            {id:"95", text: "FormControl",link: "FormControl", component: FormControl},
            {id:"96", text: "Form",link: "Form", component: Form},
            {id:"97", text: "TextArea",link: "TextArea", component: TextArea}
        ]},
        {id:"10", text: "Select",icon: "fa fa-list",link: "Select", component: Select},
        {id:"11", text: "Progress",icon: "fa fa-minus",link: "Progress", component: Progress},
        {id:"12", text: "DateRange",icon: "fa fa-clock-o",link: "DateRange", component: DateRange},
        {id:"13", text: "Tab",icon: "fa fa-folder",link: "Tab", component: Tab},
        {id:"14", text: "Toast",icon: "fa fa-cog",link: "Toast", component: Toast},
        {id:"15", text: "Panel",icon: "fa fa-folder", children: [
            {id:"151", text: "Panel",icon: "fa fa-folder",link: "Panel", component: Panel},
            {id:"152", text: "MessageBox",icon: "fa fa-folder",link: "MessageBox", component: MessageBox},
            {id:"153", text: "Dialog",icon: "fa fa-folder",link: "Dialog", component: Dialog}
        ]},
        {id:"16", text: "Divider",icon: "fa fa-cog",link: "Divider", component: Divider},
        {id:"17", text: "AutoComplete",icon: "fa fa-cog",link: "AutoComplete", component: AutoComplete}
    ]
};


const SideBar = require("SideBar");

const App = React.createClass({
    render() {
        return (
            <div>
                <SideBar data={APP.menus} style={{width: '200px'} } logo="./assets/imgs/logo.png" header={APP.sysName}>
                    {this.props.children}
                </SideBar>
            </div>
        )
    }
});

let routers = [];
APP.menus.map(function(item, index){
    if(item.children){
        item.children.forEach(function(subItem, subIndex){
            routers.push(
                <Route key={subIndex} path={subItem.link} component={subItem.component} />
            );
        });
    }
    routers.push(<Route key={index} path={item.link} component={item.component} />);
});

let Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            {routers}
        </Route>
    </Router>
), document.querySelector("#example"));