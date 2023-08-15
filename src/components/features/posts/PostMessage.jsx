/* eslint-disable react/prop-types */

export default function PostMessage({ message }) {
  return (
    <div className="d-flex justify-content-center g-2 py-3">
      <p className="text-white-50 fst-normal">{message}</p>
    </div>
  );
}
