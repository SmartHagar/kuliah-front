/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDataPenilaian,
  penilaianSelector,
} from "../../features/penilaian/penilaiainSlice";

const Nilai = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const penilaian = useSelector(penilaianSelector.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPenilaian(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (penilaian.length > 0) {
      setLoading(false);
    }
  }, [penilaian]);

  return (
    <div>
      <h1 className="uppercase my-3 text-center font-bold text-xl">
        Daftar Nilai Mata Kuliah{" "}
        {loading ? "..." : penilaian[0].subject.subject_nm}
      </h1>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th>NPM</th>
                <th>Nama</th>
                <th>UTS</th>
                <th>UAS</th>
                <th>Total</th>
                <th>Predikat</th>
              </tr>
            </thead>
            <tbody>
              {penilaian.map((item, index) => (
                <tr key={index}>
                  <th>{item.student.NPM}</th>
                  <td>{item.student.student_nm}</td>
                  <td>{item.UTS}</td>
                  <td>{item.UAS}</td>
                  <td>{item.total}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Nilai;
