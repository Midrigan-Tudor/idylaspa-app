import { useEffect, useMemo } from "react";
import {
  createCalendar,
  createViewDay,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createCalendarControlsPlugin } from "@schedule-x/calendar-controls";
import { createCurrentTimePlugin } from "@schedule-x/current-time";
import { ScheduleXCalendar } from "@schedule-x/react";

import "@schedule-x/theme-default/dist/index.css";

import { Box } from "@mui/material";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const calendarControls = createCalendarControlsPlugin();
const currentTime = createCurrentTimePlugin();

const Calendar = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();

  const locale = useMemo(
    () => (language === "ro" ? "ro-RO" : "en-US"),
    [language]
  );

  // Create calendar app with useMemo to recreate when theme or locale changes
  const calendarApp = createCalendar({
    theme: mode === "dark" ? "dark" : "light",
    views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
    defaultView: "week",
    events: [],
    dayBoundaries: {
      start: "08:00",
      end: "22:00",
    },
    locale,
    timezone: "Europe/Bucharest",
    weekOptions: {
      timeAxisFormatOptions: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: language === "ro" ? false : true,
      },
    },
    plugins: [currentTime, calendarControls],
  });

  useEffect(() => {
    if (calendarApp) {
      calendarApp.setTheme(mode === "dark" ? "dark" : "light");
    }
  }, [mode, calendarApp]);

  useEffect(() => {
    calendarControls.setLocale(locale);
  }, [locale]);

  useEffect(() => {
    calendarControls.setWeekOptions({
      timeAxisFormatOptions: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: language === "ro" ? false : true,
      },
    });
  }, [language]);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ScheduleXCalendar calendarApp={calendarApp} />
    </Box>
  );
};

export default Calendar;
