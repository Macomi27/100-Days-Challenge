const testimonials = [
  {
    userName: "Cherise G",
    userImage:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },

  {
    userName: "Rosetta Q",
    userImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },

  {
    userName: "Constantine V",
    userImage:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let count = 0;

changeTestimonial();

function changeTestimonial() {
  const { userName, userImage, text } = testimonials[count];
  imageEl.src = userImage;
  textEl.innerHTML = text;
  nameEl.innerText = userName;
  count++;

  if (count === testimonials.length) {
    count = 0;
  }

  // setTimeout(changeTestimonial, 5000)

  setTimeout(() => {
    changeTestimonial();
  }, 5000);
}
