import React from "react";

export default (props) => {
  console.log("props");
  console.log(props);
  const eLink = props.links.map((link, index) => (
    <li key={index}>
      <a href={link.href} className="nav-link px-2 text-secondary">
        {link.title}
      </a>
    </li>
  ));

  return <>{eLink}</>;
};
