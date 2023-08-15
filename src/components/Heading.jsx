/* eslint-disable react/prop-types */
export default function Heading({ title }) {
  return (
    <h1 className="text-start text-white text-capitalize fst-normal fs-3 lh-1">
      {title}
    </h1>
  );
}
