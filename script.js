const submitBtn = document.querySelector("#submit-button")
const resetBtn = document.querySelector("#reset-button")
const cgpaCard = document.querySelector("#cgpa-card")

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  operation()
  cgpaCard.classList.add("open") //document.getElementById("my-form").reset()
})

resetBtn.addEventListener("click", (e) => {
  document.getElementById("my-form").reset()
})

function operation() {
  const courseOneCredits = Number(
    document.getElementById("course-1-input-credits").value
  )
  const courseOneGradePoints = Number(
    document.getElementById("course-1-input-grade-points").value
  )

  const courseTwoCredits = Number(
    document.getElementById("course-2-input-credits").value
  )
  const courseTwoGradePoints = Number(
    document.getElementById("course-2-input-grade-points").value
  )

  const courseThreeCredits = Number(
    document.getElementById("course-3-input-credits").value
  )
  const courseThreeGradePoints = Number(
    document.getElementById("course-3-input-grade-points").value
  )

  const courseFourCredits = Number(
    document.getElementById("course-4-input-credits").value
  )
  const courseFourGradePoints = Number(
    document.getElementById("course-4-input-grade-points").value
  )

  const courseFiveCredits = Number(
    document.getElementById("course-5-input-credits").value
  )
  const courseFiveGradePoints = Number(
    document.getElementById("course-5-input-grade-points").value
  )

  const courseSixCredits = Number(
    document.getElementById("course-6-input-credits").value
  )
  const courseSixGradePoints = Number(
    document.getElementById("course-6-input-grade-points").value
  )

  const courseSevenCredits = Number(
    document.getElementById("course-7-input-credits").value
  )
  const courseSevenGradePoints = Number(
    document.getElementById("course-7-input-grade-points").value
  )

  const courseEightCredits = Number(
    document.getElementById("course-8-input-credits").value
  )
  const courseEightGradePoints = Number(
    document.getElementById("course-8-input-grade-points").value
  )

  const totalCredits =
    courseOneCredits +
    courseTwoCredits +
    courseThreeCredits +
    courseFourCredits +
    courseFiveCredits +
    courseSixCredits +
    courseSevenCredits +
    courseEightCredits

  document.getElementById("total-credits").innerHTML = totalCredits

  const courseOneCreditPoints = courseOneCredits * courseOneGradePoints
  const courseTwoCreditPoints = courseTwoCredits * courseTwoGradePoints
  const courseThreeCreditPoints = courseThreeCredits * courseThreeGradePoints
  const courseFourCreditPoints = courseFourCredits * courseFourGradePoints
  const courseFiveCreditPoints = courseFiveCredits * courseFiveGradePoints
  const courseSixCreditPoints = courseSixCredits * courseSixGradePoints
  const courseSevenCreditPoints = courseSevenCredits * courseSevenGradePoints
  const courseEightCreditPoints = courseEightCredits * courseEightGradePoints

  const totalCreditPoints =
    courseOneCreditPoints +
    courseTwoCreditPoints +
    courseThreeCreditPoints +
    courseFourCreditPoints +
    courseFiveCreditPoints +
    courseSixCreditPoints +
    courseSevenCreditPoints +
    courseEightCreditPoints

  document.getElementById("total-credit-points").innerHTML = totalCreditPoints

  const cgpa = totalCreditPoints / totalCredits

  document.getElementById("cgpa").innerHTML = cgpa
}
