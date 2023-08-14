/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function PostButton({ showInputForm, setShowInputForm }) {
  return (
    <div className="row justify-content-center g-2 py-3">
      <div className="col-lg-7">
        <div className="d-flex justify-content-end g-2">
          <button
            onClick={() =>
              setTimeout(() => {
                setShowInputForm(true);
              }, 300)
            }
            type="button"
            className="btn btn-md rounded text-center text-white fst-normal fs-5 mb-3"
            style={{
              backgroundColor: "#4c0bce",
            }}
          >
            Buat Postingan Baru
          </button>
        </div>
      </div>
    </div>
  );
}
