import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
