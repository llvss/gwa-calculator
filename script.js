const disclaimerModal = document.getElementById("disclaimerModal");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

window.addEventListener("load", () => {
  disclaimerModal.classList.add("show");
});

acceptBtn.addEventListener("click", () => {
  disclaimerModal.classList.remove("show");
});

declineBtn.addEventListener("click", () => {
  window.close()
});

const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const popupClose = document.getElementById("popupClose");

function showPopup(message) {
  popupMessage.textContent = message;
  popup.classList.add("show");
}

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

const subjectsByCourseSemester = {
  BSIT: {
    1: {
      1: {
        WebDev: [
          "2MATHMWORLD",
          "4FYE1",
          "6CFUN",
          "6LOGPROG",
          "7TPE1",
          "9STS",
          "THEOLOGY101",
        ],
        NetAd: [
          "2MATHMWORLD",
          "4FYE1",
          "6CFUN",
          "6LOGPROG",
          "7TPE1",
          "9STS",
          "THEOLOGY101",
        ],
      },
      2: {
        WebDev: [
          "1PURCOMM",
          "2ANAGEOM",
          "4FYE2",
          "6DMATHS",
          "6PHCI",
          "6PROGSDATS",
          "7TPE2",
          "THEOLOGY102",
        ],
        NetAd: [
          "1PURCOMM",
          "2ANAGEOM",
          "4FYE2",
          "6DMATHS",
          "6PHCI",
          "6PROGSDATS",
          "7TPE2",
          "THEOLOGY102",
        ],
      },
    },
    2: {
      1: {
        WebDev: [
          "2CALC-IT",
          "4ETHICS",
          "6COMETHICS",
          "6DSAL",
          "6INTROWEB",
          "6OOP",
          "6OSAPP",
          "7TPE3",
        ],
        NetAd: [
          "2CALC-IT",
          "4CONWORLD",
          "4ETHICS",
          "6DSAL",
          "6INTROWEB",
          "6OOP",
          "6OSAPP",
          "7TPE3",
        ],
      },
      2: {
        WebDev: [
          "2PROBSTAT",
          "4READPHILHIS",
          "6DWEB",
          "6IMAN",
          "6ITN",
          "7TPE4",
          "9CALBPHYS",
          "9CALBPHYSL",
          "THEOLOGY103",
        ],
        NetAd: [
          "2PROBSTAT",
          "4READPHILHIS",
          "6COMETHICS",
          "6IMAN",
          "6ITN",
          "6SERVERTECH",
          "7TPE4",
          "THEOLOGY103",
        ],
      },
    },
    3: {
      1: {
        WebDev: [
          "2LINALGEB",
          "6ADDBASE",
          "6IASEC",
          "6SSAD",
          "6WCSERVER",
          "6WEBPUB",
          "ELECTIVE1",
        ],
        NetAd: [
          "2LINALGEB",
          "6IASEC",
          "6ITPROGMAN",
          "6SERVERMAN",
          "6SRWE",
          "9CALBPHYS",
          "9CALBPHYSL",
          "ELECTIVE1",
        ],
      },
      2: {
        WebDev: [
          "1TWRITE-ITE",
          "4UNDERSELF",
          "6ADET",
          "6AWEB",
          "6CLOUDCOM",
          "6WSEA",
          "ELECTIVE2",
        ],
        NetAd: [
          "1TWRITE-ITE",
          "4UNDERSELF",
          "6ADET",
          "6CLOUDCOM",
          "6ENSA",
          "ELECTIVE2",
          "ELECTIVE3",
        ],
      },
    },
  },
  BSEMC: {
    1: {
      1: [
        "2MATHMWORLD",
        "9STS",
        "6LOGPROG",
        "6EMC",
        "4FYE1",
        "THEOLOGY101",
        "7TPE1",
      ],
      2: [
        "1PURCOMM",
        "4ARTAPP",
        "6DRAW1",
        "6PROGSDATS",
        "6DESKPUB",
        "4FYE2",
        "THEOLOGY102",
        "7TPE2",
      ],
    },
    2: {
      1: [
        "4CONWORLD",
        "9PHYSICS-A",
        "6IGAME",
        "6DSAL",
        "6DRAW2",
        "6UHCID",
        "6COMETHICS",
        "7TPE3",
      ],
      2: [
        "4READPHILHIS",
        "63DANIMP",
        "6ADSE",
        "6CWRITED",
        "6IMAN",
        "6ADET",
        "THEOLOGY103",
        "7TPE4",
      ],
    },
    3: {
      1: [
        "4UNDERSELF",
        "6COMGRAP",
        "6SOPMAN",
        "6IVPROL",
        "6DESPRO",
        "6MODRIG",
        "6ADVAN2D",
        "ELECTIVE1",
      ],
      2: [
        "1TWRITE-ITE",
        "4ETHICS",
        "6COMREN",
        "6ADV3D",
        "6LIGHTX",
        "6TMAP",
        "ELECTIVE2",
      ],
    },
  },
  BSCS: {
    1: {
      1: [
        "2MATHMWORLD",
        "4FYE1",
        "9STS",
        "6CFUN",
        "6LOGPROG",
        "THEOLOGY101",
        "7TPE1",
      ],
      2: [
        "1PURCOMM",
        "4FYE2",
        "6COMETHICS",
        "6DMATHS",
        "6PHCI",
        "6PROGSDATS",
        "THEOLOGY102",
        "7TPE2",
      ],
    },
    2: {
      1: [
        "2LINALGEB",
        "4READPHILHIS",
        "6ADMATHS",
        "6COARC",
        "6DSAL",
        "6OOP",
        "6WEBCS",
        "7TPE3",
      ],
      2: [
        "2DIFFCAL",
        "4UNDERSELF",
        "6DIPROGLANG",
        "6DASALGO",
        "6IMAN",
        "6ITN",
        "6SSAD",
        "THEOLOGY103",
        "7TPE4",
      ],
    },
    3: {
      1: [
        "1TWRITE-ITE",
        "2INTCALC",
        "2PROBSTAT",
        "6ADET",
        "6ATF",
        "6IMODSIM",
        "6IMSOFTENG",
        "6IASEC",
      ],
      2: [
        "4ETHICS",
        "6CISTUDY1",
        "6CLOUDCOM",
        "6OPSYSFUN",
        "9CBPHYSICS",
        "9CBPHYSICSL",
        "ELECTIVE1",
        "ELECTIVE2",
      ],
    },
  },
  BSC: {
    1: {
      1: [
        "2MATHMWORLD",
        "9STS",
        "6LOGPROG",
        "6CFUN",
        "4FYE1",
        "THEOLOGY101",
        "7TPE1",
      ],
      2: [
        "1PURCOMM",
        "2ANAGEOM",
        "6DMATHS",
        "6PROGSDATS",
        "6PHCI",
        "4FYE2",
        "THEOLOGY102",
        "7TPE2",
      ],
    },
    2: {
      1: [
        "4ETHICS",
        "4CONWORLD",
        "2CALC-IT",
        "6ICYBER",
        "6DSAL",
        "6OOP",
        "6INTROWEB",
        "6OPSYSFUN",
        "7TPE3",
      ],
      2: [
        "4READPHILHIS",
        "2PROBSTAT",
        "6ITN",
        "6DASALGO",
        "6IMAN",
        "6DWEB",
        "THEOLOGY103",
        "7TPE4",
      ],
    },
    3: {
      1: [
        "4ARTAPP",
        "4RIZAL",
        "2LINALGEB",
        "6INFOR",
        "6IOT",
        "6SERVERSEC1",
        "6CLOUDSEC",
        "6SRWE",
      ],
      2: [
        "1TWRITE-ITE",
        "4UNDERSELF",
        "6ENSA",
        "6SHSEC",
        "6SERVERSEC2",
        "9CALBPHYS",
        "9CALBPHYSL",
      ],
    },
  },
  BSC2: {
    1: {
      1: [
        "2MATHMWORLD",
        "9STS",
        "6CFUN",
        "6LOGPROG",
        "6EMC",
        "4FYE1",
        "THEOLOGY101",
        "7TPE1",
      ],
      2: [
        "1PURCOMM",
        "2ANAGEOM",
        "6DMATHS",
        "6PROGSDATS",
        "6PHCI",
        "4FYE2",
        "THEOLOGY102",
        "7TPE2",
      ],
    },
    2: {
      1: [
        "4ETHICS",
        "4CONWORLD",
        "2CALC-IT",
        "6ICYBER",
        "6DSAL",
        "6OOP",
        "6INTROWEB",
        "6OPSYSFUN",
        "7TPE3",
      ],
      2: [
        "4READPHILHIS",
        "2PROBSTAT",
        "6ITN",
        "6DSALGO",
        "6IMAN",
        "6DWEB",
        "THEOLOGY103",
        "7TPE4",
      ],
    },
    3: {
      1: [
        "4ARTAPP",
        "4RIZAL",
        "2LINALGEB",
        "6INFOR",
        "6IOT",
        "6SERVERSEC1",
        "6CLOUDSEC",
        "6SRWE",
      ],
      2: [
        "1TWRITE-ITE",
        "4UNDERSELF",
        "6ENSA",
        "6SHSEC",
        "6SERVERSEC2",
        "9CALBPHYS",
        "9CALBPHYSL",
      ],
    },
  },
};

const subjectUnits = {
  "7TPE1": 2,
  "7TPE2": 2,
  "7TPE3": 2,
  "7TPE4": 2,
  "9CALBPHYSL": 1,
  "6SHSEC": 1,
  "6SERVERSEC2": 1,
  "6IOT": 1,
  "6SERVERSEC1": 1,
};

let selectedYear = null,
  selectedCourse = null,
  selectedSemester = null,
  selectedSpecialization = null;
const subjectList = [];

const yearSelect = document.getElementById("year");
const courseSelect = document.getElementById("course");
const specializationSelect = document.getElementById("specialization");
const specializationDiv = document.getElementById("specializationSelection");
const semesterSelect = document.getElementById("semester");
const gwaForm = document.getElementById("gwaForm");
const subjectSelect = document.getElementById("subject");
const gradeSelect = document.getElementById("grade");
const subjectListEl = document.getElementById("subjectList");
const subjectsListDiv = document.getElementById("subjectsListDiv");
const resultEl = document.getElementById("gwaResult");
const addBtn = document.getElementById("addBtn");
const changeBtn = document.getElementById("changeBtn");
const calcBtn = document.getElementById("calcBtn");

yearSelect.addEventListener("change", () => {
  selectedYear = yearSelect.value;
});
courseSelect.addEventListener("change", () => {
  selectedCourse = courseSelect.value;
  specializationDiv.style.display =
    selectedCourse === "BSIT" ? "block" : "none";
  if (selectedCourse !== "BSIT") selectedSpecialization = null;
  checkShowForm();
});
specializationSelect.addEventListener("change", () => {
  selectedSpecialization = specializationSelect.value;
  checkShowForm();
});
semesterSelect.addEventListener("change", () => {
  selectedSemester = semesterSelect.value;
  checkShowForm();
});

function checkShowForm() {
  if (!selectedYear || !selectedCourse || !selectedSemester) return;
  if (selectedCourse === "BSIT" && !selectedSpecialization) return;

  subjectSelect.innerHTML =
    '<option value="" disabled selected>Select Subject</option>';
  let subjects;
  if (selectedCourse === "BSIT")
    subjects =
      subjectsByCourseSemester[selectedCourse][selectedYear][selectedSemester][
        selectedSpecialization
      ];
  else
    subjects =
      subjectsByCourseSemester[selectedCourse][selectedYear][selectedSemester];
  subjects.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subjectSelect.appendChild(option);
  });

  yearSelect.parentElement.style.display = "none";
  courseSelect.parentElement.style.display = "none";
  if (selectedCourse === "BSIT") specializationDiv.style.display = "none";
  semesterSelect.parentElement.style.display = "none";

  gwaForm.style.display = "block";
  subjectsListDiv.style.display = "block";
  changeBtn.style.display = "block";
  calcBtn.style.display = "block";
}

function addSubject() {
  const subject = subjectSelect.value;
  const grade = parseFloat(gradeSelect.value);
  const units = subjectUnits[subject] || 3;
  if (!subject || isNaN(grade))
    return showPopup("Please select a subject and grade.");

  if (subjectList.some((s) => s.subject === subject)) {
    return showPopup("This subject is already added.");
  }

  const subjectObj = { subject, units, grade };
  subjectList.push(subjectObj);

  const li = document.createElement("li");
  li.classList.add("subject-item");

  const text = document.createElement("span");
  text.textContent = `${subject} - Units: ${units}, Grade: ${grade}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "x";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", () => {
    const index = subjectList.findIndex((s) => s.subject === subject);
    if (index > -1) {
      subjectList.splice(index, 1);
    }
    li.remove();
  });

  li.appendChild(text);
  li.appendChild(removeBtn);
  subjectListEl.appendChild(li);

  gwaForm.reset();
  let subjects;
  if (selectedCourse === "BSIT")
    subjects =
      subjectsByCourseSemester[selectedCourse][selectedYear][selectedSemester][
        selectedSpecialization
      ];
  else
    subjects =
      subjectsByCourseSemester[selectedCourse][selectedYear][selectedSemester];

  subjectSelect.innerHTML =
    '<option value="" disabled selected>Select Subject</option>';
  subjects.forEach((sub) => {
    const option = document.createElement("option");
    option.value = sub;
    option.textContent = sub;
    subjectSelect.appendChild(option);
  });
}

addBtn.addEventListener("click", addSubject);
gradeSelect.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addSubject();
  }
});

calcBtn.addEventListener("click", () => {
  if (!subjectList.length) return showPopup("Please add at least one subject.");
  let totalUnits = 0,
    totalWeighted = 0;
  subjectList.forEach((item) => {
    totalUnits += item.units;
    totalWeighted += item.units * item.grade;
  });
  const avg = totalWeighted / totalUnits;
  resultEl.innerHTML = `
    <strong>Total Units:</strong> ${totalUnits}<br>
    <strong>Total Weighted Grades:</strong> ${totalWeighted.toFixed(3)}<br>
    <strong>General Average Grade:</strong> ${avg.toFixed(3)}<br>
    <strong>Status:</strong> ${getStatus(avg)}
  `;
});

function getStatus(avg) {
  if (avg >= 1.0 && avg <= 1.25) return "President's Lister";
  else if (avg >= 1.26 && avg <= 1.75) return "Dean's Lister";
  else if (avg > 3.0) return "Failed";
  else return "Passed";
}

changeBtn.addEventListener("click", () => {
  subjectList.length = 0;
  subjectListEl.innerHTML = "";
  resultEl.innerHTML = "";
  gwaForm.style.display = "none";
  yearSelect.parentElement.style.display = "block";
  courseSelect.parentElement.style.display = "block";
  semesterSelect.parentElement.style.display = "block";
  specializationDiv.style.display =
    selectedCourse === "BSIT" ? "block" : "none";
  changeBtn.style.display = "none";
  calcBtn.style.display = "none";
  yearSelect.value = "";
  courseSelect.value = "";
  semesterSelect.value = "";
  specializationSelect.value = "";
  selectedYear = null;
  selectedCourse = null;
  selectedSemester = null;
  selectedSpecialization = null;
});