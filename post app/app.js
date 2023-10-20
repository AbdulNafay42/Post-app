

// /// DASHBOARD
const publishBtn = document.getElementById("publish-btn");
const postedBlog = document.getElementById("posted-blog");

publishBtn && publishBtn.addEventListener('click', () => {
  const inputTitle = document.getElementById("input-title").value;
  const inputContent = document.getElementById("Input-content").value;
 var currentDate =  moment().format("M/D/YYYY")

  const blogHTML = `
    <div class="card">
      <div class="section-1 d-flex">
       <img src="imag/364f963e-11f4-419d-bbd5-01e9165ca37c.jpg" alt="">
      <p>${inputTitle}</p>
      </div>
      <div class="section-2 d-flex">
        <p>Abdul Nafay - ${currentDate}</p>
      </div>
      <div class="section-3">
        <p>${inputContent}</p>
      </div>
    </div>
  `;

  postedBlog.innerHTML += blogHTML;
});

