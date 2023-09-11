document.addEventListener("DOMContentLoaded", () => {
  const dayOfWeekElem = document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  );
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  dayOfWeekElem.textContent = currentDay;

//   const utcTimeElem = document.querySelector("[data-testid='currentUTCTime']");
//   //   utcTimeElem.textContent = new Date().toISOString();
//   utcTimeElem.textContent = Date.now();
      const updateTime = () => {
        const utcTimeElem = document.querySelector(
          "[data-testid='currentUTCTime']"
        );
        utcTimeElem.textContent = Date.now();
      };
      updateTime();


      setInterval(updateTime, 1000);

});
