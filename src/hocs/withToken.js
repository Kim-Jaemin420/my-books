export default function withToken(Component) {
  function NewComponent(props) {
    const token = localStorage.getItem('token');
    return <Component {...props} token={token} />;
  }

  NewComponent.displayName = `withToken(${
    Component.displayName || Component.name
    })`;

  return NewComponent;
}
