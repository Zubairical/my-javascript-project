const studentsData = [
    {
        name: "Ali Khan",
        fatherName: "Shah Wali Khan",
        class: "10th",
        rollNo: "12345",
        urdu: 85,
        english: 90,
        historyGeo: 80,
        maths: 70,
        gScience: 60,
        drawing: 75,
        cScience: 65,
        pashto: 88,
        qirat: 92
    },
    {
        name: "Sara Bibi",
        fatherName: "Zahid Bibi",
        class: "9th",
        rollNo: "12346",
        urdu: 45,
        english: 50,
        historyGeo: 40,
        maths: 45,
        gScience: 50,
        drawing: 55,
        cScience: 60,
        pashto: 40,
        qirat: 30
    },
    {
        name: "Zubair Ahmad",
        fatherName: "Ali",
        class: "9th",
        rollNo: "2",
        urdu: 45,
        english: 50,
        historyGeo: 40,
        maths: 45,
        gScience: 50,
        drawing: 55,
        cScience: 60,
        pashto: 40,
        qirat: 30
    }
];

const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");
const reportCard = document.getElementById("reportCard");
const errorMessage = document.getElementById("errorMessage");

function calculatePercentage(marks) {
    const totalMarks = 100 * 9;
    const obtainedMarks = marks.reduce((acc, mark) => acc + mark, 0);
    return (obtainedMarks / totalMarks) * 100;
}

function displayReportCard(student) {
    const marks = [
        student.urdu,
        student.english,
        student.historyGeo,
        student.maths,
        student.gScience,
        student.drawing,
        student.cScience,
        student.pashto,
        student.qirat
    ];

    const percentage = calculatePercentage(marks);
    const remarks = percentage < 33 ? "Failed" : "Passed";
    const wishMessage = percentage < 33 ? "Better luck next time!" : "Congratulations on passing!";

    document.getElementById("studentName").textContent = student.name;
    document.getElementById("fatherName").textContent = student.fatherName;
    document.getElementById("studentClass").textContent = student.class;
    document.getElementById("rollNo").textContent = student.rollNo;

    document.getElementById("urduMarks").textContent = student.urdu;
    document.getElementById("englishMarks").textContent = student.english;
    document.getElementById("historyMarks").textContent = student.historyGeo;
    document.getElementById("mathsMarks").textContent = student.maths;
    document.getElementById("gScienceMarks").textContent = student.gScience;
    document.getElementById("drawingMarks").textContent = student.drawing;
    document.getElementById("cScienceMarks").textContent = student.cScience;
    document.getElementById("pashtoMarks").textContent = student.pashto;
    document.getElementById("qiratMarks").textContent = student.qirat;

    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("remarks").textContent = remarks;
    document.getElementById("wishMessage").classList.add(remarks === "Failed" ? "alert-danger" : "alert-success");
    document.getElementById("wishMessage").textContent = wishMessage;

    reportCard.classList.remove("d-none");
    errorMessage.classList.add("d-none");
}

function searchStudent() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const student = studentsData.find(student => student.name.toLowerCase() === searchQuery || student.fatherName.toLowerCase() === searchQuery || student.rollNo === searchQuery);
    if (student) displayReportCard(student);
    else reportCard.classList.add("d-none"), errorMessage.classList.remove("d-none");
}

function captureReportCard() {
    html2canvas(document.getElementById("reportCard")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = "Report_Card.png";
        link.click();
    });
}

searchBtn.addEventListener("click", searchStudent);
clearBtn.addEventListener("click", () => { document.getElementById("searchInput").value = ""; reportCard.classList.add("d-none"); errorMessage.classList.add("d-none"); });
downloadBtn.addEventListener("click", captureReportCard);
