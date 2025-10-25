import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/pagelayout";
import UpcomingCard from "../components/upcoming/upcomingCard";
import UpcomingCTA from "../components/upcoming/upcomingCTA";
import { FaBookOpen, FaCalendarAlt, FaStar, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Upcoming() {
  const { t } = useTranslation();

  // Preluăm array-ul din i18n
  const upcomingItemsRaw = t("upcomingPage.items", { returnObjects: true });

  // Mapăm icon-urile după cheie
  const iconMap = {
    book: <FaBookOpen className="text-purple-600 dark:text-purple-400" />,
    users: <FaUsers className="text-purple-600 dark:text-purple-400" />,
    star: <FaStar className="text-purple-600 dark:text-purple-400" />,
    calendar: (
      <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />
    ),
  };

  const upcomingItems = upcomingItemsRaw.map((item) => ({
    ...item,
    icon: iconMap[item.iconKey] || (
      <FaBookOpen className="text-purple-600 dark:text-purple-400" />
    ),
  }));

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
        >
          {t("upcomingPage.hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          {t("upcomingPage.hero.description")}
        </motion.p>
      </section>

      {/* Cards Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {upcomingItems.map((item, idx) => (
            <UpcomingCard
              key={idx}
              title={item.title}
              date={item.date}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <UpcomingCTA />
    </PageLayout>
  );
}
