export interface Project {
  title: string;
  text: {
    summary: string;
    detailed: string;
    technicalDetails: string;
    test: string;
  };
  img: { img: string; alt: string }[];
  links: {
    demo: string;
    code: string;
    more: string;
  };
}
export const projectData: Project[] = [
  {
    title: "Dummy project 1",
    text: {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae",
      detailed:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia, sequi nesciunt corporis optio quas dicta, maiores, quaerat quod sunt ea amet? Porro nemo quae velit, possimus dolorum, temporibus officia illo laborum repellendus reiciendis consequatur fuga eos eum earum ipsam deserunt? Qui esse ipsa atque sunt maiores odit optio rem architecto incidunt facilis quas natus delectus ea ab, nesciunt vitae tempore quisquam saepe totam quos similique veritatis? Quos, illum, voluptatum nulla impedit earum dolorem culpa quia, consectetur molestias sapiente ullam sequi dicta. Vitae, facere tempora, excepturi, voluptate impedit debitis omnis asperiores ut iure quidem ex minima corporis deleniti id nemo.",
      technicalDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae?",
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate doloribus laborum porro perferendis quasi labore.",
    },
    img: [{ img: "https://i.imgur.com/TfdtHKf.png", alt: "alt" }],
    links: {
      demo: "https://github.com/tahmdev",
      code: "https://github.com/tahmdev",
      more: "Dummy-project-1",
    },
  },
  {
    title: "Dummy project 2",
    text: {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae",
      detailed:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia, sequi nesciunt corporis optio quas dicta, maiores, quaerat quod sunt ea amet? Porro nemo quae velit, possimus dolorum, temporibus officia illo laborum repellendus reiciendis consequatur fuga eos eum earum ipsam deserunt? Qui esse ipsa atque sunt maiores odit optio rem architecto incidunt facilis quas natus delectus ea ab, nesciunt vitae tempore quisquam saepe totam quos similique veritatis? Quos, illum, voluptatum nulla impedit earum dolorem culpa quia, consectetur molestias sapiente ullam sequi dicta. Vitae, facere tempora, excepturi, voluptate impedit debitis omnis asperiores ut iure quidem ex minima corporis deleniti id nemo.",
      technicalDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae?",
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate doloribus laborum porro perferendis quasi labore.",
    },
    img: [{ img: "https://i.imgur.com/TfdtHKf.png", alt: "alt" }],
    links: {
      demo: "https://github.com/tahmdev",
      code: "https://github.com/tahmdev",
      more: "Dummy-project-2",
    },
  },
  {
    title: "Dummy project 3",
    text: {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae",
      detailed:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia, sequi nesciunt corporis optio quas dicta, maiores, quaerat quod sunt ea amet? Porro nemo quae velit, possimus dolorum, temporibus officia illo laborum repellendus reiciendis consequatur fuga eos eum earum ipsam deserunt? Qui esse ipsa atque sunt maiores odit optio rem architecto incidunt facilis quas natus delectus ea ab, nesciunt vitae tempore quisquam saepe totam quos similique veritatis? Quos, illum, voluptatum nulla impedit earum dolorem culpa quia, consectetur molestias sapiente ullam sequi dicta. Vitae, facere tempora, excepturi, voluptate impedit debitis omnis asperiores ut iure quidem ex minima corporis deleniti id nemo.",
      technicalDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae?",
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate doloribus laborum porro perferendis quasi labore.",
    },
    img: [{ img: "https://i.imgur.com/TfdtHKf.png", alt: "alt" }],
    links: {
      demo: "https://github.com/tahmdev",
      code: "https://github.com/tahmdev",
      more: "Dummy-project-3",
    },
  },
  {
    title: "Dummy project 4",
    text: {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae",
      detailed:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia, sequi nesciunt corporis optio quas dicta, maiores, quaerat quod sunt ea amet? Porro nemo quae velit, possimus dolorum, temporibus officia illo laborum repellendus reiciendis consequatur fuga eos eum earum ipsam deserunt? Qui esse ipsa atque sunt maiores odit optio rem architecto incidunt facilis quas natus delectus ea ab, nesciunt vitae tempore quisquam saepe totam quos similique veritatis? Quos, illum, voluptatum nulla impedit earum dolorem culpa quia, consectetur molestias sapiente ullam sequi dicta. Vitae, facere tempora, excepturi, voluptate impedit debitis omnis asperiores ut iure quidem ex minima corporis deleniti id nemo.",
      technicalDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae?",
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate doloribus laborum porro perferendis quasi labore.",
    },
    img: [{ img: "https://i.imgur.com/TfdtHKf.png", alt: "alt" }],
    links: {
      demo: "https://github.com/tahmdev",
      code: "https://github.com/tahmdev",
      more: "Dummy-project-4",
    },
  },
  {
    title: "Dummy project 5",
    text: {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae",
      detailed:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus mollitia, sequi nesciunt corporis optio quas dicta, maiores, quaerat quod sunt ea amet? Porro nemo quae velit, possimus dolorum, temporibus officia illo laborum repellendus reiciendis consequatur fuga eos eum earum ipsam deserunt? Qui esse ipsa atque sunt maiores odit optio rem architecto incidunt facilis quas natus delectus ea ab, nesciunt vitae tempore quisquam saepe totam quos similique veritatis? Quos, illum, voluptatum nulla impedit earum dolorem culpa quia, consectetur molestias sapiente ullam sequi dicta. Vitae, facere tempora, excepturi, voluptate impedit debitis omnis asperiores ut iure quidem ex minima corporis deleniti id nemo.",
      technicalDetails:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quae?",
      test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate doloribus laborum porro perferendis quasi labore.",
    },
    img: [{ img: "https://i.imgur.com/TfdtHKf.png", alt: "alt" }],
    links: {
      demo: "https://github.com/tahmdev",
      code: "https://github.com/tahmdev",
      more: "Dummy-project-5",
    },
  },
];
