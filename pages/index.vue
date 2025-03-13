<script setup lang="ts">
/* Interfaces */
interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

const { $annotate } = useNuxtApp()
const notationColor = '#ECE8C5'
const isTextAnimating = ref(false)
const notationDom = ref<HTMLElement | null>(null)

// 建立 rough-notation 實例
let annotation: ReturnType<typeof $annotate> | null = null

// 是否顯示更多經歷
const showExtra = reactive({
  jobs: false,
  education: false
})

// 卡片內容
const cards = {
  work: [
    {
      title: 'Research',
      description: 'Curious about our research? Take a look!',
      href: '/research'
    },
    {
      title: 'Projects',
      description: 'My projects and contributions to the open-source community.',
      href: '/projects'
    }
  ],
  me: [
    {
      title: 'Daily Song',
      description: 'Fresh, cool and great song recommendations from me each day!',
      href: '/me/daily'
    },
    {
      title: 'Contact',
      description: 'Need help with anything? Want to get in touch? Send me a message!',
      href: '/me/contact'
    }
  ]
}

// 經歷
const experiences = {
  jobs: [
    {
      title: 'Syntec Technology Co., Ltd.',
      url: 'https://www.syntecclub.com/',
      position: 'Full-Stack Developer',
      date: '2023-2025'
    },
    {
      title: 'Interactive Graphics Laboratory, NTU',
      url: 'http://graphics.im.ntu.edu.tw/',
      position: 'Research Assistant',
      date: '2022-2023'
    },
    {
      title: 'Game for Life: Reading and Redesigning Games, NTU',
      position: 'Teaching Assistant',
      url: 'https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=725%20U3620&class=&dpt_code=7050&ser_no=48081&semester=110-2',
      date: '2022',
      isHidden: true
    },
    {
      title: 'Game Programming, NTU',
      position: 'Teaching Assistant',
      url: 'https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=725%20U3270&class=&dpt_code=7250&ser_no=19242&semester=110-1',
      date: '2021-2022',
      isHidden: true
    },
    {
      title: 'Data Structures and Advanced Program Design, NTU',
      position: 'Teaching Assistant',
      url: 'https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=705%2010600&class=&dpt_code=7050&ser_no=53401&semester=110-2',
      date: '2021',
      isHidden: true
    }
  ],
  education: [
    {
      title: 'National Taiwan University',
      url: 'https://www.ntu.edu.tw/',
      position: 'Master of Information Management',
      date: '2020-2022'
    },
    {
      title: 'National Central University',
      url: 'https://www.ncu.edu.tw/tw/index.html',
      position: 'Bachelor of Information Management',
      date: '2016-2020'
    }
  ]
} as ExperienceObject

// Tech Stack
const skills = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'C#', 'Swift', 'Dart']
  },
  {
    title: 'Frontend Development',
    items: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Tailwind CSS', 'Vite', 'Webpack', 'ECharts']
  },
  {
    title: 'Mobile App Development',
    items: ['SwiftUI', 'Flutter']
  },
  {
    title: 'Interactive Tools',
    items: ['Unity', 'Figma']
  },
  {
    title: 'Services',
    items: [
      {
        title: 'GitHub',
        iconPack: 'IconPlatform'
      },
      {
        title: 'GitLab',
        iconPack: 'IconPlatform'
      },
      {
        title: 'Firebase',
        iconPack: 'IconPlatform'
      },
      {
        title: 'Netlify',
        iconPack: 'IconPlatform'
      }
    ]
  }
]

// 跳轉至指定區塊
const route = useRoute()
const router = useRouter()
const scrollToSection = async (id: string) => {
  if (route.hash === id) {
    await router.replace({ hash: '' })
  }
  await router.replace({ hash: id })
}

onMounted(async () => {
  await nextTick()

  if (notationDom.value) {
    annotation = $annotate(notationDom.value, {
      type: 'highlight',
      color: notationColor
    })
    initTextAnimation()
  } else {
    console.error('notationDom is null')
  }
})

// 初始化動畫
function initTextAnimation() {
  setTimeout(() => {
    isTextAnimating.value = true
    annotation?.show()
  }, 800)
}

useHead({
  title: 'Home'
})
</script>

<template>
  <div class="space-y-24 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-8">
          <!-- 自我介紹 -->
          <div class="lg:space-y-4">
            <h1
              class="font-semibold text-center text-lg md:(text-xl text-left) text-black/50 dark:text-white/50"
            >
              Hi, I am
              <span class="text-black/90 dark:text-white/90">Freya Liao</span>
            </h1>

            <h1
              class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90"
            >
              Full-stack Developer
            </h1>

            <h3
              class="font-semibold justify-center text-xl items-center md:(text-2xl text-left justify-start) transition-opacity duration-1000 flex gap-2 text-center text-[#fde047] dark:text-dark-200"
              :class="isTextAnimating ? 'opacity-100' : 'opacity-30'"
            >
              <div class="flex flex-col items-end text-[10px] text-black/50 dark:text-white/50">
                <span>currently</span>
              </div>

              <span ref="notationDom" class="text-black/90 dark:text-black/50 px-2">
                Exploring Cross-Platform Mobile Development
              </span>
            </h3>
          </div>

          <!--  技能 ＆ 跳轉至所有技能 -->
          <div class="flex-c md:justify-start gap-x-3 gap-y-2 flex-wrap">
            <Button v-for="item in ['Vue.js', 'JavaScript', 'TypeScript']" :key="item">
              <IconDev :brand="item" class="h-5 w-5" />
            </Button>

            <!-- 顯示更多 -->
            <Button
              v-tippy="{
                content: 'More',
                placement: 'bottom'
              }"
              @click="scrollToSection('#technologies')"
            >
              <IconEllipsis class="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <!-- 大頭貼 -->
      <div class="rounded-full mx-auto mb-4 md:mb-0">
        <SmartImage src="/images/picture.png" class="rounded-full h-50 w-50" />
      </div>
    </header>

    <!-- 作品 -->
    <section id="work">
      <CardTitle>Work</CardTitle>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.work"
          :key="`card-w-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <!-- 關於我 -->
    <section id="me">
      <CardTitle>About Me</CardTitle>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <!-- 工作經驗與學歷 -->
    <section id="experiences" class="grid gap-x-8 gap-y-24 md:grid-cols-2">
      <div>
        <div class="flex items-center gap-4 justify-between">
          <CardTitle>Experience</CardTitle>
          <button
            type="button"
            class="text-black/50 text-sm hover:underline dark:text-white/30"
            @click="showExtra.jobs = !showExtra.jobs"
          >
            {{ showExtra.jobs ? 'show less' : 'show more' }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtra.jobs : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <CardTitle>Education</CardTitle>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section id="technologies">
      <CardTitle>Technologies I use</CardTitle>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="font-medium text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:(text-white/30 border-white/5)"
          >
            {{ category.title }}
          </h5>

          <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-2">
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="typeof skill === 'object' ? skill : { title: skill }"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
