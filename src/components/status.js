const DisplayStatus = ({ props: { provider, address } }) => (
  <p>
    {provider ? "Provider successfully injected!" : "No injection"}
    <br />
    <br />
    {address && address.toLowerCase()}
  </p>
);

export default DisplayStatus;
