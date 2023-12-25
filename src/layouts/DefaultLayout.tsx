// Children must be rendered, otherwise the child routes cannot be displayed
// Here you can also set global provision
const layout = (props) => {
  console.log(props);
  return props.children;
};
export default layout;
