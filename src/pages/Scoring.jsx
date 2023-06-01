import { useState } from "react";
import styles from "./scoring.module.css";
import profileImg from "./../assets/profile.svg";

function Scoring() {
  const [mahasiswa, setMahasiswa] = useState([
    {
      label: "Mahasiswa 1",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 2",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 3",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 4",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 5",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 6",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 7",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 8",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 9",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      label: "Mahasiswa 10",
      aspek1: "1",
      aspek2: "1",
      aspek3: "1",
      aspek4: "1",
      opt: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
  ]);

  //function for select input
  function setAspect(event, index, aspek) {
    const { value } = event.target;

    const temp = mahasiswa.map((val, idx) =>
      index === idx
        ? {
            ...val,
            [aspek]: value,
          }
        : val
    );

    setMahasiswa(temp);
  }

  //function for submit
  function submit(event) {
    event.preventDefault();

    const resObj = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {},
    };

    let idx = 1;

    for (const value in resObj) {
      resObj[value] = mahasiswa.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.label.toLowerCase().split(" ").join("_")]: curr["aspek" + idx],
        };
      }, {});

      idx++;
    }

    console.log(resObj);
  }

  return (
    <>
      <form onSubmit={submit}>
        <table>
          <thead>
            <tr style={{ border: "none" }}>
              <th></th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((val, index) => {
              return (
                <tr key={index}>
                  <td style={{ paddingRight: "10px" }}>
                    <div className={styles.container__profile}>
                      <img className={styles.profile__image} src={profileImg} />
                      {val.label}
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <select
                      className={styles.selectInput}
                      value={val.aspek1}
                      onChange={(val) => setAspect(val, index, "aspek1")}
                    >
                      {val.opt.map((x) => {
                        return (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <select
                      className={styles.selectInput}
                      value={val.aspek2}
                      onChange={(val) => setAspect(val, index, "aspek2")}
                    >
                      {val.opt.map((x) => {
                        return (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <select
                      className={styles.selectInput}
                      value={val.aspek3}
                      onChange={(val) => setAspect(val, index, "aspek3")}
                    >
                      {val.opt.map((x) => {
                        return (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <select
                      className={styles.selectInput}
                      value={val.aspek4}
                      onChange={(val) => setAspect(val, index, "aspek4")}
                    >
                      {val.opt.map((x) => {
                        return (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.container__button}>
          <button className={styles.btnSubmit} type="submit">
            Simpan
          </button>
        </div>
      </form>
    </>
  );
}

export default Scoring;
