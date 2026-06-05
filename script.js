function bounceElement(selector, speed = "medium") {
  const el = document.querySelector(selector);

  el.classList.remove("bounce", "slow", "medium", "fast");
  void el.offsetWidth; // animation restart

  el.classList.add("bounce", speed);
}
// Usage
bounceElement(".box", "slow");
bounceElement(".box", "medium");
bounceElement(".box", "fast");