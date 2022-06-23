/** @format */

import React, { useEffect, useState } from "react";
import NavComponent from "../../components/NavComponent";

import { useDispatch, useSelector } from "react-redux";
import {
  matkulSelector,
  getDataMatkul,
} from "../../features/matkul/matkulSlice";

const IndexUser = () => {
  const [pathName, setPathName] = useState("");

  const [li, setLi] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const matkul = useSelector(matkulSelector.selectAll);

  useEffect(() => {
    dispatch(getDataMatkul());
  }, [dispatch]);

  useEffect(() => {
    if (matkul.length > 0) {
      // push matkul to li
      setLi([{ id: "/", subject_nm: "HOME" }, ...matkul]);
      setLoading(false);
    }
  }, [matkul]);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <div>
      <NavComponent li={li} loading={loading} pathName={pathName} />
    </div>
  );
};

export default IndexUser;
