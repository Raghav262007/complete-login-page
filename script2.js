function checkInfo() {
  const people = [
    {
      info1: { email: "robot@gmail.com", password: "robotonics12346" },
      info2: { email: "robot58@gmail.com", password: "AIrobot" },
    },
  ];

  let emailUser = document.getElementById("email").value;
  let passUser = document.getElementById("password").value;
  for (let i = 0; i < people.length; i++) {
    if (
      (people[i].info1.email === emailUser &&
        people[i].info1.password === passUser) ||
      (people[i].info2.email === emailUser &&
        people[i].info2.password === passUser)
    ) {
      document.querySelector(".intro").textContent =
        "You have entered correct email and password. You are successfully loged in";
    } else if (emailUser === "" || passUser === "") {
      document.querySelector(".intro").textContent =
        "Please fill out both of the fields";
    } else {
      document.querySelector(".intro").textContent =
        "Incorrect email or password. Login failed!!";
    }
  }
}
