# take home assignment - Futures AI

## how to start
- `git clone $thisRepo`
- `cd tha-futures-ai`
- `npm install`
- `npm run dev`
- check the app. on http://localhost:5173/

## tech stack
- scss for styling
- redux for handling global state
- redux toolkit query (rtk query) for applying services/apis
  - 印象中您提到使用 rtk query 做 api 存取的控管

## structure
```
src/
├── pages/
│   └── DailyChipsPage/
│       ├── NavGroup/
│       └── tabContents/
│           ├── chipCarryOver/
│           │   └── ChipCarryOver/
│           └── chipOverview/
│               ├── ChipCard/
│               ├── ChipCardBarChart/
│               └── ChipOverview/
├── states/
│   ├── futuresOp/
│   └── marketInsight/
├── components/
│   └── TestComponent/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── utils.ts
└── vite-env.d.ts
```
- description
  - [apis/services] 兩隻 api by domain 放在 states/ 底下，分別為 futuresOp and marketInsight，可進一步進入 api slice 查閱 相關的 endpoints 及 處理
  - 目前只做 Daily Chips Page
    - 頁面架構放在 DailyChipsPage.tsx 這個 Component
    - 架構相對單純如下
      - DailyChipsPage
        - TabGroup
          - Tabs
          - Components
            - 根據 activeTab 渲染 不同的 component
            - i.e. `navs: [{ key: 'chip-overview',label: '籌碼概覽',component:<ChipOverview />,},{key: 'chip-carry-over',label: '留倉籌碼',component: <ChipCarryOver />,},],`

## todo
- DailyChipsPage
  - [x] ChipCard
    - [x] ChipCard draft
    - [x] ChipCardBarChart
    - [x] Complete ChipCard
    - [x] TODO: remove mockChipData
  - [x] ChipCardGroup
  - [ ] extract config
  - [ ] checks
    - [ ] check fallbacks
    - [ ] check error handlings
    - [ ] check edge cases i.e. the case [get not data]
  - [x] TabGroup
    - [x] Layout of [Tab and Content]
  - 留倉籌碼 Content
    - apis/services
    - tab group
      - 2 tabs
    - TVCandleChart
      - // TV (Trading View)
    - the card component 
      - // to come out with the component name
    - the card list component 
      - // to come out with the component name
      - // why not HOC?
- others
  - [ ] RTK Query Cache System
  - [ ] Tune Chart Details
  - [ ] TODO: supply from, to in getChipUnifyTable
  - [ ] make ChipCard a compound component
  - [ ] make TabGroup a compound component
  - [ ] bug report
  - [ ] enhancement report
  - [ ] Testing 
    - // didn't think to much this time, cuz the focus is more on showing the capability of implementing features
  - [ ] chores
    - [ ] TODO: pull out configs into separate config files
    - [ ] TODO: ChipCardBarChart tooltip
    - [ ] TODO: chipName as const enum
    - [ ] TODO: convert date format to MM/DD in ChipCardBarChart
    - [ ] TODO: latestOiDiffUnit
- Other Pages
  - ...
