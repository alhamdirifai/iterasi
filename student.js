// Array untuk menyimpan daftar siswa
let students = [];

// Fungsi untuk menampilkan daftar siswa
function displayStudents() {
    if (students.length === 0) {
        console.log("Daftar siswa kosong.");
    } else {
        console.log("Daftar Siswa:");
        students.forEach((student, index) => {
            console.log(`${index + 1}. Nama: ${student.name}, Nilai: ${student.grade}`);
        });
    }
}

// Fungsi untuk menambahkan siswa baru
function addStudent(name, grade) {
    if (name && typeof grade === 'number' && grade >= 0 && grade <= 100) {
        students.push({ name, grade });
        console.log(`Siswa ${name} dengan nilai ${grade} berhasil ditambahkan.`);
    } else {
        console.log("Data siswa tidak valid. Pastikan nama diisi dan nilai berupa angka antara 0 hingga 100.");
    }
}

// Fungsi untuk menghapus siswa berdasarkan nama
function deleteStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Siswa ${name} berhasil dihapus.`);
    } else {
        console.log(`Siswa dengan nama ${name} tidak ditemukan.`);
    }
}

// Fungsi untuk mengubah nilai siswa
function updateStudentGrade(name, newGrade) {
    if (typeof newGrade === 'number' && newGrade >= 0 && newGrade <= 100) {
        const student = students.find(student => student.name === name);
        if (student) {
            student.grade = newGrade;
            console.log(`Nilai siswa ${name} berhasil diubah menjadi ${newGrade}.`);
        } else {
            console.log(`Siswa dengan nama ${name} tidak ditemukan.`);
        }
    } else {
        console.log("Nilai baru tidak valid. Pastikan nilai berupa angka antara 0 hingga 100.");
    }
}

// Fungsi untuk menghitung nilai rata-rata kelas
function calculateAverageGrade() {
    if (students.length === 0) {
        console.log("Tidak ada siswa untuk menghitung nilai rata-rata.");
        return;
    }
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    const average = total / students.length;
    console.log(`Nilai rata-rata kelas adalah ${average.toFixed(2)}.`);
}

// Fungsi untuk menampilkan siswa dengan nilai tertinggi dan terendah
function displayHighestAndLowestGrades() {
    if (students.length === 0) {
        console.log("Tidak ada siswa untuk menampilkan nilai tertinggi dan terendah.");
        return;
    }
    let highest = students[0];
    let lowest = students[0];

    students.forEach(student => {
        if (student.grade > highest.grade) {
            highest = student;
        }
        if (student.grade < lowest.grade) {
            lowest = student;
        }
    });

    console.log(`Siswa dengan nilai tertinggi adalah ${highest.name} dengan nilai ${highest.grade}.`);
    console.log(`Siswa dengan nilai terendah adalah ${lowest.name} dengan nilai ${lowest.grade}.`);
}

// Contoh penggunaan fungsi-fungsi di atas
addStudent("Didi", 85);
addStudent("Dina", 92);
addStudent("Sumanto", 78);
displayStudents();
updateStudentGrade("Sumanto", 88);
displayStudents();
deleteStudent("Didi");
displayStudents();
calculateAverageGrade();
displayHighestAndLowestGrades();
