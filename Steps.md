# [Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode](https://www.youtube.com/watch?v=wYpCWwD1oz0)

--- start to 13:00--- code set up

- install packages
  `yarn add @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar formik yup @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo`

--- 13:00 to 36:22 --- file folder structure and theme set up

- vscode extenstion `Tailwind Shades` for create different shades for a color
- trick in setting different mode: invert the levels from dark to light
- hooks: createContext, useMemo

--- 36:22 to XXX --- 1:26:50 Appbar, sidebar Dashboard initial setup

- google chrome extension pesticide to view css

--- 1:26:50 to 1:58:10 --- data Grid for Team, Contacts and Invoices

- at Invoices, if you selected multiple rows, mui provides api for selected rows where you can pass any action into it, which will be useful

--- 1:58:10 to 2:21:28 --- Form with Formik and Yup

- Why Formik?
- Yup vs Zod?
- later try to change from Yup to Zod to practice.

--- 2:21:28 to 2:48:55 --- Fullcalendar and According(FAQ)

- [example for fullcalendar in typescript](https://codesandbox.io/s/react-typescript-fullcalendar-example-calendar-01-64jit?file=/src/App.tsx:1025-1034)

--- 2:48:55 to 3:22:54 Nivo charts ---

- Nivo charts provide a webpage to tune different parameters and have code for that chart ready to be copied.
- [Line chart](https://nivo.rocks/line/)

--- 3:22:54 to XXX Dashboard ---

--- more work to do ---
make webpage more responsive
transfer to my project
