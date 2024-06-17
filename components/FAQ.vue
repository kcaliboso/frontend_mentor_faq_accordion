<template>
  <article
    class="w-[26rem] lg:w-[30rem] bg-white rounded-lg p-7 flex flex-col gap-6"
  >
    <section class="flex gap-6 items-center">
      <img src="~/assets/img/icon-star.svg" alt="icon-star" class="h-6" />
      <h2 class="text-4xl font-work-sans font-bold">FAQs</h2>
    </section>

    <section
      class="hover:cursor-pointer [&>details>summary>img[data-icon=minus]]:hidden [&>details[open]>summary>img[data-icon=minus]]:block [&>details>summary>img[data-icon=plus]]:block [&>details[open]>summary>img[data-icon=plus]]:hidden"
    >
      <details open :ref="setDetailRefs">
        <summary
          class="py-2 font-work-sans text-md hover:cursor-pointer hover:text-accordion-violet flex font-semibold justify-between items-center"
        >
          What is Frontend Mentor, and how will it help me?
          <img
            src="~/assets/img/icon-minus.svg"
            alt="icon-minus"
            data-icon="minus"
            class=""
          />
          <img
            src="~/assets/img/icon-plus.svg"
            alt="icon-minus "
            data-icon="plus"
            class=""
          />
        </summary>
        <p class="text-sm tracking-wide leading-6 text-gray-600">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </p>
      </details>
      <br />
      <hr />
      <details :ref="setDetailRefs">
        <summary
          class="py-2 font-work-sans text-md hover:cursor-pointer hover:text-accordion-violet flex font-semibold justify-between items-center"
        >
          Is Frontend Mentor free?
          <img
            src="~/assets/img/icon-minus.svg"
            alt="icon-minus"
            data-icon="minus"
            class=""
          />
          <img
            src="~/assets/img/icon-plus.svg"
            alt="icon-minus "
            data-icon="plus"
            class=""
          />
        </summary>

        <p class="text-sm tracking-wide leading-6 text-gray-600">
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </p>
      </details>
      <br />
      <hr />
      <details :ref="setDetailRefs">
        <summary
          class="py-2 font-work-sans text-md hover:cursor-pointer hover:text-accordion-violet flex font-semibold justify-between items-center"
        >
          Can I use Frontend Mentor projects in my portfolio?
          <img
            src="~/assets/img/icon-minus.svg"
            alt="icon-minus"
            data-icon="minus"
            class=""
          />
          <img
            src="~/assets/img/icon-plus.svg"
            alt="icon-minus "
            data-icon="plus"
            class=""
          />
        </summary>
        <p class="text-sm tracking-wide leading-6 text-gray-600">
          Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!
        </p>
      </details>
      <br />
      <hr />
      <details :ref="setDetailRefs">
        <summary
          class="py-2 font-work-sans text-md hover:cursor-pointer hover:text-accordion-violet flex font-semibold justify-between items-center"
        >
          How can I get help if I'm stuck on a challenge?
          <img
            src="~/assets/img/icon-minus.svg"
            alt="icon-minus"
            data-icon="minus"
            class=""
          />
          <img
            src="~/assets/img/icon-plus.svg"
            alt="icon-minus "
            data-icon="plus"
            class=""
          />
        </summary>
        <p class="text-sm tracking-wide leading-6 text-gray-600">
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </p>
      </details>
    </section>
  </article>
</template>

<script lang="ts" setup>
const detailsRefs = [];
const setDetailRefs = (el) => {
  if (el) {
    detailsRefs.push(el);
  }
};

onMounted(() => {
  detailsRefs.forEach((detail) => {
    detail.addEventListener("click", function (event) {
      event.preventDefault();

      const openedDetail = document.querySelector("details[open]");
      openedDetail?.removeAttribute("open");

      if (this !== openedDetail) {
        this.setAttribute("open", "");
      }
    });
  });
});
</script>
